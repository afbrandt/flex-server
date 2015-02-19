var express = require('express'),
  mongoskin = require('mongoskin'),
  bodyParser = require('body-parser'),
  cheerio = require('cheerio'),
  request = require('request')


var app = express()

app.use(bodyParser())

var db = mongoskin.db(process.env.DEV_MONGODB || 'mongodb://@localhost:27017/test', {safe:true})

app.get('/', function(req, res) {
  res.send('I am awake...')
})

app.get('/v1/product', function(req, res) {
  res.send('enter valid UPC')
})

app.get('/v1/product/:upc', function(req, res) {
  var response = { upc : req.params.upc }
  res.setHeader("Content-Type", "application/json")
  db.collection("flex-dev").findOne({ "upc" : req.params.upc}, function(e, doc){
    if (doc) {
      response["result"] = "found"
    } else {
      response["result"] = "none"
    }
    console.log(res.get('Content-Type'))
    res.json(response)
  })
})

app.listen(process.env.PORT || 3000);
