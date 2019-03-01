const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, err => {
  if (err) console.log(err);
  console.log('MongoDB Connected successfully !!!');
});

const app = express();

require('./services/passport');
require('./routes/authRoutes')(app);

// for output in console
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listenning on port ${PORT} ...`);
});
