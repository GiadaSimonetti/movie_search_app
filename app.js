var express = require('express');
var request = require('request');

var app = express();

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Movie app has stearted!!!");
});
