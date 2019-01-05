var express = require('express');
var fs = require('fs');
var promise = require('./promise');
var app = express();

var obj;

fs.readFile('mmjvcvJf.js', (err, data) => {
  if (err) throw err;
  obj = JSON.parse(data);
  Object.keys(obj).forEach(key => {
    if(obj[key].email.endsWith(".it")){
      console.log(obj[key]);
      var initializePromise = promise.initialize(obj[key].ip_address);
       initializePromise.then(result => {
           userDetails = result;
           console.log(userDetails.country)
       }, function(err) {
           console.log(err);
       })
    }
  })
});

//app.listen(3016);
