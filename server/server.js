
const express = require('express');

// const connectDB = require('./db');

// connectDB();

const transactionrouter = require('./routes/transactionroutes');
const authenticationrouter=require('./routes/auth');
const app = express();

app.use(express.json());

app.use('/api/authenticate',authenticationrouter);

app.use('/api/transactions', transactionrouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));