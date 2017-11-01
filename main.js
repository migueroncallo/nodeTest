var express = require('express')
var MongoClient = require('mongodb')

const port = process.env.PORT || 3000

var app = express()

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World'
  })
})


app.listen(port, () =>{
  console.log('Server up on port', port)
})
