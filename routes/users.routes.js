///////////
// ROUTE //
///////////
// ROUTE is a section of Express code that associates: an HTTP verb ( GET , POST , PUT , DELETE , etc.), 
// A URL path/pattern, and a function that is called to handle that pattern.


/////////////
// IMPORTS //
/////////////
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
// To access the user.model we had set up to check signup
const userFunctions = require("../models/users.model");


// Boardgame_App App.js page looks at this to see if they are logged in to decide to display things
// Checks to see if the user is logged in
// Not using isAuth because we don't want to send them a 401 forbidden in the page or console
router.get("/authenticate", (req, res) =>{
  if(!req.user){
    return res.send({success: false, data: null, error: error})
  }
  return res.send({ success: true, data: {username: req.user.username}, error: null});
});


//////////
// POST //
//////////
// When they go to post (send up) information at page /signup, do ...
router.post("/signup", (req, res) => {
    return userFunctions.signUp(res, req.body.username, req.body.password);
});


// Passport lets us save it into a cookie, serialize it.
// The login function moved to passport.
// When they go to post (send up) information at page /signup, do ...
router.post("/login", (req, res) => {
    // user.login(res, req.body.username, req.body.password);
    passport.authenticate("local", (err, user, info) => {       // Strategy that was setup in passport.config called LocalStrategy
      if (err) {
        return res.send({ success: false, data: null, error: err });
      }
      if (!user) {
        return res.send({ success: false, data: null, error: info });   // Info comes from passport.config try
      }
      // req.login is specific to passport. Used because we didn't use it as middleware
      // Serializing the user on the cookie
      req.logIn(user, (err) => {  
        // Sending the reponse in the format we expect instead of format passport shows    
        return res.send({               
          success: true,
          data: { username: user.username },
          error: null,
        });
      });
    })(req, res);
  });


/////////////
// EXPORTS //
/////////////
module.exports = router;