const express = require('express');
const app = express();
const connectDB = require('./config/db'); 
var bodyParser = require('body-parser')



app.use(express.json({extended: false}));
const port = process.env.por || 5000;


// connect to database
connectDB();

app.get('/', (req, res) => { 
    res.send('Hello World!')
  })   


  //Routes
  app.use('/api/users', require ('./routes/api/users'));
  app.use('/api/auth', require ('./routes/api/auth'));
  app.use('/api/posts', require ('./routes/api/posts'));
  app.use('/api/profile', require ('./routes/api/profile'));
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

