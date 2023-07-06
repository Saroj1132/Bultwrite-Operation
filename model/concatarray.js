const mongoose=require('mongoose')

const mongooseschema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    product:{
        type:Array,
        require:true
    },
    qty:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    title:{
        type:Array,
        require:true
    }
})

const user=mongoose.model('concatarrays',mongooseschema)

module.exports=user