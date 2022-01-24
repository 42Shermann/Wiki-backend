const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MemorySchema = new Schema({
    
    name:String,
    stats:{
        hp:String,
        crit:String,
        atk:String,
        def:String
    },
    portrait:{
        first:String,
        second:String,
        third:String
    },
    setbonus: {
      '2pc':String,
      '4pc':String
    },
    stories:[
      String,
    ]
	}
);

MemorySchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('memory', MemorySchema);