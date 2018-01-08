const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const redis = require('connect-redis')(session);
const db = require('./models');
const path = require('path');
const PORT = require(`./config/${process.env.NODE_ENV}`).PORT

const app = express();

// enabling json body-parser and encoding
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({ "extended" : false }));
app.use(bodyParser.json());
app.use(session({
  store: new redis(),
  secret: "keyboard cat",
  resave: false,
  saveInitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server listening on port: ${PORT}`);
});

