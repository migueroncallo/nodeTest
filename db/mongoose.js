var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TestApp', (err, db) =>{
  if(!err){
    console.log('Connected to db on port 27017')
  }
})

module.exports = {mongoose}
