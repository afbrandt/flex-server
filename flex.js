var express = require('express'),
  mongoskin = require('mongoskin'),
  bodyParser = require('body-parser')

var app = express()

app.use(bodyParser())

var db = mongoskin.db(process.env.DEV_MONGODB, {safe:true})

app.get('/', function(req, res) {

  res.send('I am awake...')
})

app.get('/v1/product', function(req, res) {
  res.send('enter valid UPC')
})

app.get('/v1/product/:upc', function(req, res) {
  var response = {"upc" : req.params.upc }
  res.setHeader("content-type", "text/javascript")
  res.send(response)
})

app.listen(process.env.PORT || 3000);
