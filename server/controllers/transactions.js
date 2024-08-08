
const Transaction = require('../models/transaction');

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
  try {
    
    const transactions = await Transaction.find({ user: req.user.userId });

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}


exports.addTransaction = async (req, res, next) => {
  try {
    
     const newtransaction={...req.body,user:req.user.userId};
    const transaction = new Transaction(newtransaction);
    await transaction.save();
    return res.status(201).json({
      success: true,
      data: transaction
    }); 
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
  try {
     const transaction=await Transaction.findByIdAndDelete(req.params.id);

    if(!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      });
    }


    return res.status(200).json({
      success: true
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}