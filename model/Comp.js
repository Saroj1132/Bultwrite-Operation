const mongoose=require('mongoose')

const mongooseschema=mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Price:{
        type:Number,
        require:true
    }
})

const Comp=mongoose.model('concats',mongooseschema)

module.exports=Comp