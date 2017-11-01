var express = require('express')
var MongoClient = require('mongodb')
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Message} = require('./models/message');

var app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  Message.find().then( (messages) => {
    res.send({messages})
  }, (e) => {
    res.status(400).send(e)
  })
})

app.post('/message', (req, res) =>{
  var message = new Message({
    text: req.body.text
  })

  message.save().then((message) =>{
    res.send(message)
  }, (e) =>{
    res.status(400).send(e)
  })
})

app.listen(port, () =>{
  console.log('Server up on port', port)
})
