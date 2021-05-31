const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String,require},
    email:{type:String,require},
    password:{type:String,require},
    isAdmin:{type:Boolean,default:false}
},{
    timestamps:true
})

const userModal = mongoose.model('users',userSchema);
module.exports = userModal ;