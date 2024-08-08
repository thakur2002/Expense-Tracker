
const jwt = require('jsonwebtoken');
require('dotenv').config({path:'../.env'});
const auth = (req, res, next) => {
//   const token = req.headers['Authorization'].replace('Bearer ', '');
  const authHeader = req.headers['Authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token,process.env.Secret);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports = auth;
