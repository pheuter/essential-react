var express = require('express');
var app = express();

// Serve static files
app.use(express.static(__dirname + '/build'));

// Sample responses to demonstrate async routing data fetch
app.post('/landing', function(req, res) {
  res.json({
    title: "Landing Page"
  });
});

app.post('/home', function(req, res) {
  res.json({
    title: "Home Page"
  });
});


// Run server
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Essential React listening at http://%s:%s', host, port);
});