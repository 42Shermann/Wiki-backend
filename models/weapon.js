const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WeaponSchema = new Schema({
    
    wID:String,
    type:String,
    name:String,
    ability:String,
    atk:String,
    crit:String,
    const:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'construct'
    }
	}
);

WeaponSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('weapon', WeaponSchema);