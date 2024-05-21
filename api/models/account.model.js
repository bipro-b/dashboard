import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    date:{
        type:Date
    },
    actype:{
        type:String,
    },
   
    head:{
        type:String
    },
    amount:{
        type:Number
    }
})

const Account = mongoose.model('Account',AccountSchema);

export default Account;