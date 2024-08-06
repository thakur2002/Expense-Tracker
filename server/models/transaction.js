const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required:true
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: [true, 'Please add some text']
  },
  amount:{
    type:Number,
    required:true
  },
  type:{
     type:String,
     enum:["Income","Expense"],
     required:true
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);