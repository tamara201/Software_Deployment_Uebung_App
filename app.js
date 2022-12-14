//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('<html><button id="myButton" class="float-left submit-button" >Home</button><script type="text/javascript">document.getElementById("myButton").onclick = function () { location.href = "https://www.metalevel.at/prolog";};</script></html>"')
  //res.redirect('https://www.metalevel.at/prolog');
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('App listening on port 8080!')
})
