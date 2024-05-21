import { mongoose } from "mongoose";

const userShcema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        uniques:true
    },
    gender:{
        type:String,
        required:true,
        uniques:true,
    },
    dob:{
        type:Date
    },
    email:{
        type:String
    },
    eid:{
        type:String
    },
    designation:{
        type:String
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }

},{timestamps:true})

const User = mongoose.model('User',userShcema);
export default User;