const request = require('request');
const fs = require('fs');

const url = 'https://www.google.com/';

request(url, (err, res, body) => {
    if (err){
        console.log(err);
    }
    else{
        fs.writeFile('GoogleHomePage.html', body, (err) => {
            if (err) {
                console.log('Error downloading the page');
            }
            else{
                console.log('Successfully Downloaded the page');
            }
        })
    }
});