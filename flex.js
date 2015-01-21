var express = require('express'),
  mongoskin = require('mongoskin'),
  bodyParser = require('body-parser')

var app = express()

app.use(bodyParser())

var db = mongoskin.db('mongodb://@localhost:27017/flex-dev', {safe:true})

app.get('/', function(req, res) {
  res.send('I am awake...')
})

app.get('/v1/product/', function(req, res) {
  res.send('enter valid UPC')
})

app.listen(3000)
