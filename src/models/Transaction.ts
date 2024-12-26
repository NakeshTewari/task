import mongoose from "mongoose"; //imports mongose lib used to imteract with mongodb

// creating schema

const TransactionSchema = new mongoose.Schema({
    amount:{type: Number, required: true},
    type:{ type:String,enum:["credit", "debit"], required: true},
    description:{ type:String},
    date:{type:Date, default:Date.now}
});

// exporting the model
//creates model with defined schema
export default mongoose.model("Transaction", TransactionSchema);