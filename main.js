var parser = new DOMParser();
var xmlSrc = "<note>\n<to>Tove</to>\n<from>Jani</from>\n<heading>Reminder</heading>\n<body>Don't forget me this weekend!</body>\n</note>";
var xmlDoc = parser.parseFromString(xmlSrc, 'text/xml').documentElement;
console.dir(xmlDoc);
var serializer = new XMLSerializer();
var xmlStr = serializer.serializeToString(xmlDoc);
console.log('-------- ser xml', xmlStr);
var observer = new MutationObserver(function (mutationRecords) {
    console.log(mutationRecords); // console.log(изменения)
});
// наблюдать за всем, кроме атрибутов
observer.observe(xmlDoc, {
    attributes: true,
    characterData: true,
    childList: true, // наблюдать за непосредственными детьми
    subtree: true, // и более глубокими потомками
    characterDataOldValue: true // передавать старое значение в колбэк
});
var body = xmlDoc.querySelector('body');
body.append(document.createTextNode('sdf'));
document.body.append(xmlDoc);
// xPath
var bodyByXPath = document.evaluate('/html/body', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
console.log(bodyByXPath);
