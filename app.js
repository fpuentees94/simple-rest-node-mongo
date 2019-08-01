// in sublime
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
  name: { type: String, trim: true, default: null }})


const products = mongoose.model('Product', productSchema);




mongoose.connect("mongodb+srv://root:1234@cluster0-9d1wo.mongodb.net/simple_ripley?retryWrites=true&w=majority", (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});


app.get('/', async function (req, res) {
try{
 const resProducts = await products.find().exec();
 res.send(JSON.stringify({products:resProducts}));
}
 catch(error){
   rest.send(JSON.stringify(error));
 }
});
app.get('/lillo', function (req, res) {
 res.send(JSON.stringify({ Hello: 'Lillo'}));
});
app.listen(port, function () {
 console.log('Example app listening on port !');
});