const xml2js = require('xml2js');
const fs = require('fs');

const parser = new xml2js.Parser();

const XmlParser = (xml_fileName) => {
    let json;
    fs.readFile('./' + xml_fileName + '.xml', (err, data) =>{
        if (err) {
            console.log('file not found');
            return err;
        }
        parser.parseString(data, (err, result) => {
            if (err) {
                console.log('xml file error');
                return err;
            }
            console.log(result);
        });
    });
};

console.log(XmlParser('sample'));