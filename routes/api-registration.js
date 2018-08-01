//api-registration route for user registration/authentication

//Dependencies:

var db = require("../models");
var expressValidator = require("express-validator");
var passport = require("passport");

//in case we are hashing passwords to db:

/*var bcrypt = require("bcrypt");*/

//cost factor controls set to 10:

/*var saltRounds = 10;*/

//routes:

module.exports = function (app) {

    app.get("/home", function (req, res) {
        res.render("home", {
            title: "Home Page"
        })
    });

    app.get("/register", function (req, res) {
        res.render("register", {
            title: "Sign Up Here"
        });
    });

    app.get("/profile", authenticationMiddleware(), function (req, res) {
        res.render("profile");
    })

    app.post("/register", function (req, res) {
        //using Middleware strategy to validate:

        req.checkBody("name", "Name field cannot be empty.").notEmpty();
        req.checkBody("name", "Name must be between 4-15 characters long.").len(4, 15);
        req.checkBody("email", "The email you entered is invalid. Please try again.").isEmail();
        req.checkBody("email", "Email address must be 10-100 characters long").len(10, 100);

    //regex check for [edu] will go here:

    /*........
    .......*/
    
        req.checkBody("username", "Username field cannot be empty.").notEmpty();
        req.checkBody("username", "Username must be between 4-15 characters long.").len(4, 15);
        req.checkBody('name', 'Name can only contain letters, numbers, or underscores.').matches(/^[A-Za-z0-9_-]+$/, 'i');
        req.checkBody("password", "Password must be between 5-50 characters long.").len(5, 50);
        req.checkBody("password", "Password must include the following characters: lowercase, uppercase, number, special.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{5,}$/, "i");
        //Confirm password:
        req.chechBody("passwordMatch", "Passwords do not match. Please try.").equals(req.body.password);

        var errors = req.validationErrors();

        if (errors) {

            console.log('errors: ${JSON.stringify(errors)}');

            res.render("register", {
                title: "Registration Error",
                errors: errors
            });
        } else {
            var name = req.body.name;
            var email = req.body.email;
            var username = req.body.username;
            var password = req.body.password;

            console.log(name);

        //If hashing is used before sending pass to db:

        /* bcrypt.hash(password, saltRounds, function(err, hash){
         } */


    //might need to update db's name:
         db.users.create({
             name: name,
             username: username,
             password: password, //hash if hashing passwords
             email: email
         }).then((result) => {
             var user_id = result.id;

             req.login(user_id, function(error){
                 if (err) throw err;
                 res.redirect('/home'); //might need to change redirect
             });
         });
        }
    });

    passport.serializeUser(function(user_id, done){
        done(null, user_id);
    });

    passport.deserializeUser(function(user_id, done){
        done(null, user_id);
});
    function authenticationMiddleware() {
        return(req, res, next) => {
            console.log("req.session.passport.user: ${JSON.stringify(req.session.passport)}");

            if(req.isAuthenticated()) return next();
            res.redirect('/login')
        }
    }
}