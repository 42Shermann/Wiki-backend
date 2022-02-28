const mongoose = require('mongoose')
const Schema = mongoose.Schema

let CommentSchema = new Schema({
    userName:String,
    name:String,
    date:Date,
    comment:String,
    const:String
	}
);

CommentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('comment', CommentSchema)