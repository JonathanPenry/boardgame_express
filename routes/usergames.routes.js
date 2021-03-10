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
// Importing middleware function that checks to see if they are logged in (authorized)
// and added it to each router action below "isAuth" (protects the routes)
const isAuth = require("../middleware/isAuth");


router.post("/add", isAuth, (req, res) => {
    return usergames.add(res, req.body, req.user.id);
});


// When they go to post (send up) information at page /signup, do ...
router.delete("/usergames/delete/:id", isAuth, (req, res) => {
    return usergames.remove(res, req.params.id, req.user.id);
});


// When they go to post (send up) information at page /signup, do ...
router.get("/usergames/owned", isAuth, (req, res) => {
    return ;                                                            // Add return statement
});


// isAuth calls the middelware function to see if they are logged in
router.get("/user", isAuth, (req, res) => {
    return usergames.byUserID(res, req.user.id);
});


router.get("/all", isAuth, (req, res) =>{
    console.log(res, req);
    return usergames.all(res);
})

// When they go to post (send up) information at page /signup, do ...
router.get("/usergames/byuserid", isAuth, (req, res) => {
    return ;                                                                // Add return statement
});


/////////////
// EXPORTS //
/////////////
module.exports = router;



////FROM MIKE's TODO_API EXAMPLE
// const express = require("express");
// const isAuth = require("../middleware/isAuth");
// const router = express.Router();
// const todos = require("../models/todos.model");

// router.post("/add", isAuth, (req, res) => {
//   return todos.add(res, req.body, req.user.id);
// });

// router.get("/all", isAuth, (req, res) => {
//   return todos.all(res);
// });

// router.get("/user", isAuth, (req, res) => {
//   return todos.byUserID(res, req.user.id);
// });

// router.delete("/delete/:id", isAuth, (req, res) => {
//   return todos.remove(res, req.params.id, req.user.id);
// });

// router.patch("/update", isAuth, (req, res) => {
//   return todos.edit(res, req.body, req.user.id);
// });

// module.exports = router;
