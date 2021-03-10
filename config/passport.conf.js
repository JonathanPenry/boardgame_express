/////////////
// IMPORTS //
/////////////
// Passport needs to serialize users so that information can be put into a cookie
const pool = require("./mysql.conf");
const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require('passport-local').Strategy;


///////////
// Login //
///////////
// Helper function
function isInvalid(val, min, max) {
    return !val || val.length < min || val.length > max;
}

// Async function with try & catch
// Passes (req.body.username, req.body.password, done) Could pass the entire object too (req) like for a SIGNUP form
// done() function is an internal passport js function that takes care of supplying user credentials after user is authenticated successfully.
// done (whether ther is an error, if there is a user, error message) are 
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        if (isInvalid(username, 8, 16) || isInvalid(password, 8, 20)) {
            // Passport- instead of throw, we return done and errors
            return done(null, false, "Invalid Data Provided");
        }
        // check the database for the username provided
        let [users,] = await pool.query("SELECT * FROM users WHERE users.username = ?", [username,]);
        // if no user exists send that response
        if (users.length === 0) {
            return done(null, false, "Invalid username");
        }
        // if it does
        // check the password with bcrypt
        const match = await bcrypt.compare(password, users[0].password);
        // if they don't match send them away
        if (!match) {
            return done(null, false, "Invalid password");
        }
        // if they do, let them in with the user that was found during the request
        return done(null, users[0]);
    } catch (err) {
        return done(err, false);
    }
})
);


/////////////////////////////
// SERIALIZE & DESERIALIZE //
/////////////////////////////

// Serialize the username to place it on a cookie
passport.serializeUser(function (user, done) {
    done(null, user.id);
});


// Deserialize the username from the cookie and determine if it's a real user
// Async in try/catch pattern
passport.deserializeUser(async function (id, done) {
    try {
      // find a user based off the id
      const [user] = await pool.query("SELECT * FROM users WHERE users.id = ?", [id,]);
      // if there is one ???
      if (!user[0]) {
        return done(null, false);
      }
      return done(null, user[0]);
      // if there isn't one ???
    } catch (err) {
      done(err, false);
    }
  });


// Handle middleware


/////////////
// EXPORTS //
/////////////
// Import into server.js
module.exports = passport;