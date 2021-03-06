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
// To access the user.model we had set up to check signup
const userFunctions = require("../models/users.model");


//////////
// POST //
//////////
// When they go to post (send up) information at page /signup, do ...
router.post("/signup", (req, res) => {
    return userFunctions.signUp(res, req.body.username, req.body.password);
});

// When they go to post (send up) information at page /signup, do ...
router.post("/login", (req, res) => {
    return userFunctions.login(res, req.body.username, req.body.password);
});


/////////////
// EXPORTS //
/////////////
module.exports = router;