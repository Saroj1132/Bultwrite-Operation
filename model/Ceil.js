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

const Ceil=mongoose.model('ceils',mongooseschema)

module.exports=Ceil