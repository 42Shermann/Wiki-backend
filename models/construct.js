const mongoose = require('mongoose')

const ConsSchema = new mongoose.Schema({
    id:String,
    faction:String,
    content:String,
    rank:String,
    wep:String,
    name:String,
    gift:String,
    Model:String,
    type:String,
    gender:String,
    img:String,
    desc:String,
    chibiImg:{
      awaken:String,
      dorm:String
    },
    Speciality:[
      String
    ],
    element:[
      {
        eleType:String,
        icon:String
      }
    ],
    info:{
      serviceTime:String,
      psychologicalAge:String,
      activationDate:String,
      height:String,
      weight:String,
      vitalFluidType:String
    },
    stats:{
      stats:{
        HP:Number,
        DEF:Number,
        ATK:Number,
        CRIT:Number
      },
      chart:String
    },
    skillOrb:[
      {
        id:String,
        cate:String,
        name:String,
        skillDesc:String,
        img:String
      }
    ],
    skillPassive:[
      {
        id:String,
        cate:String,
        name:String,
        skillDesc:String,
        img:String

      }
    ],
    Rank:[
      {
        id:String,
        cate:String,
        name:String,
        skillDesc:String,
        img:String
      }
    ],
    sig: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'weapon'
    }
})

ConsSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('construct', ConsSchema)