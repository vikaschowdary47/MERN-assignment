const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session')
const passport = require('passport');
const bodyParser = require('body-parser')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
  secret:process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized : false
 })
);

app.use(passport.initialize())
app.use(passport.session())
require('./passport-config')(passport);


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const reservationsRouter = require('./routes/reservation')
const usersRouter = require('./routes/users');


app.use('/reservations', reservationsRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
