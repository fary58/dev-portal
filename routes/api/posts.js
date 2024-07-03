const express = require('express');
const router = express.Router();




router.get('/',(req,res)=>res.send('posts routes'));

module.exports =router;