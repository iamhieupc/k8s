
var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.49.2",
  port: 31081,
  user: "root",
  password: "test1234",
  database: "my_abc"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!")
});

app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});