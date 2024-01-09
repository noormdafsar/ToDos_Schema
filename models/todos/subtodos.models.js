import mongoose  from "mongoose";
const todos = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    complete : {
        type : String,
        required : true
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

}, {timestamps: true})