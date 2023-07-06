const mongoose=require('mongoose')

const mongooseschema=mongoose.Schema({
    
    name:{
        type:String,
        require:true
    }
})

const user=mongoose.model('bulkdata',mongooseschema)

module.exports=user