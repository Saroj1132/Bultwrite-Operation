const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = mongoose.Schema({
    
    title:{
        type:String,
        require:true
    },
    status:{
        type:String,
        default:'public'
    },
    description:{
        type:String,
        require:true
    },
    tag:{
        type:String,
        require:true
    },
    // CreationDate:{
    //     type:Date,
    //     default:Date.now()
    // },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'admin'

    },

    
    
    // category_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Category'
    // },
    Image:{
        type:String
    },
    //model of single and multiple field pushing
    comments: [
        {
            _id:{
                type: Schema.Types.ObjectId,
                ref: 'comment'
            },
            Comment_Content:{
                type:String,
                require:true
            },
            Comment_Author:{
                type:String,
                require:true
            },
            Comment_Email:{
                type:String,
                require:true
            },
            Comment_Date:{
                type:Date,
                default:Date.now()
            },
            IsDelete:{
                type:Boolean,
                default:false
            },
            IsActive:{
                type:Boolean,
                default:true
            },
            IsModified:{
                type:Boolean,
                default:false
            },
            ModifiedDate:{
                type:Date
        
            }
        }
    ],
    
    allowComments: {
        type: Boolean,
        default: true
    },
    CreatedDate:{
        type:Date,
        default:Date.now()
    },
    IsDelete:{
        type:Boolean,
        default:false
    },
    IsActive:{
        type:Boolean,
        default:true
    },
    IsModified:{
        type:Boolean,
        default:false
    },
    ModifiedDate:{
        type:Date

    }
    
});

var post=mongoose.model("post", PostSchema)

module.exports=post