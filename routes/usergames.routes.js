///////////
// ROUTE //
///////////
// ROUTE is a section of Express code that associates: an HTTP verb ( GET , POST , PUT , DELETE , etc.), 
// A URL path/pattern, and a function that is called to handle that pattern.


// WHERE are they updating favorites? Search Page?
// WHERE do users click a game to identify they own it? UserGames (favorites) page?

/////////////
// IMPORTS //
/////////////
const express = require("express");
const router = express.Router();
// Importing functions from the todos.model.js
const todos = require("../models/usergames.model");


router.post("/api/usergames/add", (req, res) => {
    return ;
});


// When they go to post (send up) information at page /signup, do ...
router.post("/api/usergames/remove", (req, res) => {
    return ;
});


// When they go to post (send up) information at page /signup, do ...
router.post("/api/usergames/owned", (req, res) => {
    return ;
});


// When they go to post (send up) information at page /signup, do ...
router.post("/api/usergames/byuserid", (req, res) => {
    return ;
});


/////////////
// EXPORTS //
/////////////
module.exports = router;