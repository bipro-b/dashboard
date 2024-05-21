import mongoose from "mongoose";
import MongooseSequence from "mongoose-sequence";
const AutoIncrement = MongooseSequence(mongoose);

const listingSchema = new mongoose.Schema({
    serial:{
        type:Number,
    },
    account:{
        type:String,
        required:true
    },
    date:{
        type:Date,
    },
   
    debit:{
        type:String,
    },
    credit:{
        type:String
    }

})

listingSchema.plugin(AutoIncrement, { inc_field: 'serial' });

const List = mongoose.model('List',listingSchema);

export default List;