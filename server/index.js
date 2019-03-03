const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, err => {
  if (err) console.log(err);
  console.log('MongoDB Connected successfully !!!');
});

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./services/passport');
require('./routes/authRoutes')(app);

// for output in console
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listenning on port ${PORT} ...`);
});
