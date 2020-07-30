const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');
const passport = require('passport')
const passportLocal =require('passport-local').Strategy;

// require('../passport-config')(passport);


router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
  
      try{
        const hashPassword  = await bcrypt.hash(req.body.password, 10)
        const password = hashPassword;
        const username = req.body.username;
        const email = req.body.email;

        const newUser = new User({username,email,password});

       newUser.save()
          .then(() => res.json('User added!'))
          .catch(err => res.status(400).json('Error: ' + err));
      } catch {
          console.log("err")
      }
});

router.route('/login').post((req,res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if(err) throw err;
    if(!user) res.send("No user exists");
    else {
      req.logIn(user, (err) => {
        if(err) throw err;
        res.send("successfully authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

module.exports = router;