const mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
})

// MessageSchema.methods.toJSON = function (){
//   var message = this
//   var messageObject = message.toObject()
// }

var Message = mongoose.model('Message', MessageSchema)

module.exports = {Message}
