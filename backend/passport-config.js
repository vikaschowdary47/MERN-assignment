const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const User  = require('./models/user.model')
const usersRouter = require('./routes/users')

module.exports = function (passport) {
    passport.use(
        new localStrategy((email, password, done) => {
            User.findOne({email: email}, (err, user) => {
                if(err) throw err;
                if(!user) return done(null, false);
                bcrypt.compare(password, user.password, (err, result) => {
                    if(err) throw err;
                    if(result === true) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                });
            });
        })
    );
    passport.serializeUser((user,cb) => {
        cb(null, user.id)
    });
    passport.deserializeUser((id,cb) => {
        User.findOne({ _id: id}, (err,user) => {
            const userInfo ={
                email:user.email,
            };
            cb(err, userInfo)
        });
    });
};





// function initialize(passport) {
//     const authenticateUser = (email,password, done) => {
//         User.findOne({email:email})
//         .then(user => {
//             if(!user) {
//                 return done(null, false, {message: "No user with that email"})
//             }

//             bcrypt.compare(password, user.password, (err, result) => {
//                 if(err) throw err;

//                 if(result === true){
//                     return done(null, user);
//                 } else {
//                     return done(null, false, {message: "password incorrect"})
//                 }
//             })
//         })
//         .catch(err => console.log(err))
//     }




//     passport.use(new localStrategy({usernameField: "email"}, authenticateUser))
//     passport.serializeUser((user, done) => { 
//         done(null, user.id);
//     })
//     passport.deserializeUser((id, done) => { 
//         User.findById(id, function(err, user){
//             done(err, user);
//         });
//     });
// }

// module.exports = initialize