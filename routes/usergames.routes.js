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


router.post("/usergames/add", (req, res) => {
    return ;
});


// When they go to post (send up) information at page /signup, do ...
router.post("/usergames/remove", (req, res) => {
    return ;
});


// When they go to post (send up) information at page /signup, do ...
router.post("/usergames/owned", (req, res) => {
    return ;
});


// When they go to post (send up) information at page /signup, do ...
router.post("/usergames/byuserid", (req, res) => {
    return ;
});


/////////////
// EXPORTS //
/////////////
module.exports = router;




///////////////////////////////////
// EXAMPLES FROM MIKE'S TODO APP //
///////////////////////////////////

// IT SUCCESSFULLY POSTS NEW TODOS TO THE DATABASE

// const express = require("express");
// const router = express.Router();
// const todos = require("../models/todos.model");

// router.post("/add", (req, res) => {
//   return todos.add(res, req.body);
// });

// router.get("/all", (req, res) => {
//   return todos.all(res);
// });

// router.get("/user", (req, res) => {
//   if (!req.user) {
//     return res.status(401).send("Nice try person who isn't logged in");
//   }
//   return todos.byUserID(res, req.user.id);
// });

// router.delete("/delete/:id", (req, res) => {
//   return todos.remove(res, req.params.id);
// });

// router.patch("/update", (req, res) => {
//   return todos.edit(res, req.body);
// });

// module.exports = router;