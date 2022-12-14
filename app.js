//Load express module with `require` directive
var express = require('express')
var app = express()
var fs = require("fs");
//Define request response in root URL (/)
app.get('/', function (req, res) {
  content =  fs.readFileSync("./src/index.html").toString();
  //content = '<html><h1>Hello World!</h1></html>'
  res.send(content)
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('App listening on port 8080!')
})
