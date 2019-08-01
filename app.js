// in sublime
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:1234@cluster0-9d1wo.mongodb.net/simple_ripley?retryWrites=true&w=majority", (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});


app.get('/', function (req, res) {

 const collection = mongoose.db("simple_ripley").collection("products");
 res.send(JSON.stringify(collection);
});
app.get('/lillo', function (req, res) {
 res.send(JSON.stringify({ Hello: 'Lillo'}));
});
app.listen(port, function () {
 console.log('Example app listening on port !');
});