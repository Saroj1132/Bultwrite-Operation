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
    },
    purchaseDate:{
        type:Date,
        default:Date.now()
    },
    Deliverydate:{
        type:Date,
        default:Date.now()
    }
})

const user=mongoose.model('customer',mongooseschema)

module.exports=user