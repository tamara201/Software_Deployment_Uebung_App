//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  //content = '<html><h1>Hello World!</h1></html>'
  content = '<html><h1>Hello World!</h1><br><img src="https://i.imgur.com/oeynyTF.png"><br><button id="myButton" class="float-left submit-button" >Die Mächtigkeit!</button><script type="text/javascript">document.getElementById("myButton").onclick = function () { location.href = "https://www.metalevel.at/prolog";};</script></html>'
  res.send(content)
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('App listening on port 8080!')
})
