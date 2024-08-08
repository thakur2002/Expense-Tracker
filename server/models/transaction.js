const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true
  },
  amount:{
    type:Number,
    required:true
  },
  type:{
     type:String,
     enum:["Income","Expense"],
     required:true
  },
  user: { type: String }
});

module.exports = mongoose.model('Transaction', TransactionSchema);