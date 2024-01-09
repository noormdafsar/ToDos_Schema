import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema(
    {
        content : {
            type : String,
            required : true
        } ,
        complete : {
            type : String,
            required : true
        },
        createdBy: {
           type : mongoose.Schema.Types.ObjectId,
           ref : 'User' 
        },
        subTodos : [ // Array of Sub-ToDos
            {
                type : mongoose.Schema.Types.ObjectId,
                ref: 'SubTodo'
            }
        ]
    }, {timestamps: true}
)
export const Todo = mongoose.model('Todo',todoSchema) 