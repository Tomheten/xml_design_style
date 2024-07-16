const parser: DOMParser = new DOMParser();
const xmlSrc = `<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>`;
let xmlDoc = parser.parseFromString(xmlSrc, 'text/xml').documentElement;
console.dir(xmlDoc);

const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(xmlDoc);
console.log('-------- ser xml', xmlStr);

let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords); // console.log(изменения)
});

// наблюдать за всем, кроме атрибутов
observer.observe(xmlDoc, {
    attributes: true,
    characterData: true,
    childList: true, // наблюдать за непосредственными детьми
    subtree: true, // и более глубокими потомками
    characterDataOldValue: true, // передавать старое значение в колбэк
});

const body = xmlDoc.querySelector('body');
body.append(document.createTextNode('sdf'));
document.body.append(xmlDoc);

// xPath
const bodyByXPath = document
    .evaluate('//body', xmlDoc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue;
console.log(bodyByXPath);

