
const {promisify} = require("bluebird");
const ejsRenderFile = promisify(require('ejs').renderFile)
const fse = require('fs-extra')

const data = require("./data.json");
ejsRenderFile("index.ejs", data)
  .then(str => {
    fse.writeFile(`index.html`, str);
  });
