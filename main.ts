const parser: DOMParser = new DOMParser();
const xmlSrc = `<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>`;
let xmlDoc = parser.parseFromString(xmlSrc, 'text/xml');
console.log('-----xml', xmlDoc);
