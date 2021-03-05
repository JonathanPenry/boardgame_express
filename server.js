/////////////
// IMPORTS //
/////////////
// Dotenv must go first
require("dotenv").config();
const express = require("express");
const app = express();
// port is either the production port in env file or port 3000
const PORT = process.env.PORT || 3000;
// Body Parser allows you to send the Express server json data
const bodyParser = require ("body-parser");
// Connecting the user.routes.js & usergames.routes.js to this file and down below with app.use("/todos")
const userRoutes = require("./routes/user.routes");
const usergamesRoutes = require("./routes/usergames.routes");


///////////////
// APP.USE() //
///////////////
// APP.USE() is mostly used to set up middleware for your application. Syntax: app.use(path, callback)
// Path: It is the path for which the middleware function is being called. It can be a string representing a path or path pattern or regular expression pattern to match the paths.
// Callback: It is a middleware function or a series/array of middleware functions.



///////////////
// APP.GET() //
///////////////
// APP.GET() function routes the HTTP GET Requests to the path which is being specified with the specified callback functions. 
// Syntax: app.get( path, callback )
// Basically is it intended for binding the middleware to your application.
// Path: It is the path for which the middleware function is being called.
// Callback: Can be a middleware function or series/array of middleware functions.
app.get("/", (req, res) => res.send("Index page - Hello"));
app.get("*", (req, res) => res.redirect("/"));      // Rerouting everything back to localhost:3000/     


//////////////////
// APP.LISTEN() //
//////////////////
// Required and the optional function tells it what to do when app starts up.
app.listen(PORT, () => console.log(`TodoApp server listening on port ${PORT}`));