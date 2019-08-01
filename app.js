// in sublime
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://products:<password>@cluster0-9d1wo.mongodb.net/test?retryWrites=true&w=majority", (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});



app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'World'}));
});
app.get('/lillo', function (req, res) {
 res.send(JSON.stringify({ Hello: 'Lillo'}));
});
app.listen(port, function () {
 console.log('Example app listening on port !');
});