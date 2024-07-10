const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(db, {
        // useNewUrlParser: true,
        dbName: 'devPortal',
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  };


  module.exports = connectDB;