import mongoose from 'mongoose';// 1st step, we have to import mongoose

//2nd step, mongoose help to create schema by using "new keyword"

const userSchema = new mongoose.Schema(
    {
        // Data is going to store in this object either in array form or in object form
        // username: String,
        // email: String,
        // password: Number,
        // isActive: Boolean
        // we can explore the power of mongoose by creating data in object form
        username: {
            type: String,
            required : true,
            unique : true, 
            lowercase : true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true
        },
        password : {
            type : String,
            // "required" can also take array and take 'custom message' inside that array
            required : [true, "Password must required"]
        }
    },{timestamps: true}
)

// 3rd step, mongoose export 'User'

export const User = mongoose.model('User',userSchema);// this "User" Schema created because we use it many time in other file
 /* this model always take two parameters, 
    1st one is : what is the name of model and 
    2nd one is : On which basis model should be made
    so 1st one in this model is : "User" and 2nd one is : "userSchema"
                    ********IMPORTANT POINT*******
In DataBase, "User" always stores in plural form and all the letter is store
in small letter like in this case "User" in DataBase is going to store by the
name of "users"*/

