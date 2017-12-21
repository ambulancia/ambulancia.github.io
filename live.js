const chokidar = require('chokidar');
const renderFile = require("./buildEjs");

// One-liner for current directory, ignores .dotfiles
chokidar.watch(["./index.ejs", "./data.json"])
  .on('all', (event, path) => {
    renderFile();
  });
