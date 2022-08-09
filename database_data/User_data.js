const mongoose= require("mongoose");
const {Schema} = mongoose;
const user_typed_data = new mongoose.Schema({
    title:{type:String},
    message:{type:String},
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    createdTime:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Usertypeddata",user_typed_data)