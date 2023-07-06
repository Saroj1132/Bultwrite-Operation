const mongoose=require('mongoose')

const mongooseschema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    product:{
        type:String,
        require:true
    },
    qty:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
})

const user=mongoose.model('datas',mongooseschema)

module.exports=user