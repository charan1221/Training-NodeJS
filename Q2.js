const handlebars = require('handlebars');
const fs = require('fs');

const filler = JSON.parse(fs.readFileSync('filler.json', 'UTF8'));
const template = (fs.readFileSync('template.xml','UTF8'));

const HBtemplate = handlebars.compile(template);


let result = '';
filler.forEach( ele => {
    result += HBtemplate(ele);
});

console.log(result);

