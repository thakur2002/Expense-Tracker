
const express = require('express');

const connectDB = require('./db.js');
connectDB();
const authmiddleware=require('./middlewares/tokenverify.js');
const cors=require('cors');

const transactionrouter = require('./routes/transactionroutes.js');
const authenticationrouter=require('./routes/auth.js');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/authenticate',authenticationrouter);

app.use('/api/transactions', authmiddleware, transactionrouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));