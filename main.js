var parser = new DOMParser();
var xml = "<note>\n<to>Tove</to>\n<from>Jani</from>\n<heading>Reminder</heading>\n<body>Don't forget me this weekend!</body>\n</note>";
var xmlDoc = parser.parseFromString(xml, 'text/xml');
console.log('-----xml', xmlDoc);
