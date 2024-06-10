import { Schema, model } from "mongoose";
const UserSchema = new Schema({
Id: {type:Number,
    required: true,
    trim: true,
    unique: true
},
Nombre:{
    type: String,
    required: true,
    minLength: 10
},
Email:{
    type: String,
    required: true,
    minLength: 10
},
Password:{
    type: String,
    required: true,
}
},{
    timestamps: true
})

export default model("User",UserSchema);
