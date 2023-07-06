const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = mongoose.Schema({
    
    book_name:{
        type:String,
        require:true
    },
    book_no:{
        type:String,
        require:true
    },
    book_price:{
        type:String,
        require:true
    },
    Author_Id:{
        type: Schema.Types.ObjectId,
        ref: 'author'
    },
    Category_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Category'

    }
    
});

var book=mongoose.model("book", BookSchema)

module.exports=book