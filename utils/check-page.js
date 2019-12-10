const templater = require('./templater');
const fs = require('fs');

const pageName = process.argv[2];

const rawdata = fs.readFileSync(`${pageName}.json`);
const page = JSON.parse(rawdata);

const html = templater(page);

fs.writeFile(`./${pageName}.html`, html, function(err) {
    if(err) {
        return console.log(err);
    }
});