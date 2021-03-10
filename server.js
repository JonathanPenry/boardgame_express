/////////////
// IMPORTS //
/////////////
// Dotenv must go first
require("dotenv").config();
const passport = require("./config/passport.conf");
const express = require("express");

const app = express();
const session = require("express-session")
// port is either the production port in env file or port 3000
const PORT = process.env.PORT || 3000;
// Body Parser allows you to send the Express server json data
const bodyParser = require ("body-parser");
// Connecting the user.routes.js & usergames.routes.js to this file and down below with app.use("/")
const userRoutes = require("./routes/users.routes");
const usergamesRoutes = require("./routes/usergames.routes");


// This needs to be before the app.use for the routes so it must stay at the top.
// For Passport-Sessions
app.use(express.static(__dirname + "/build"));
app.use(session({ secret: process.env.SECRET_KEY }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

///////////////
// APP.USE() //
///////////////
// APP.USE() is mostly used to set up middleware for your application. Syntax: app.use(path, callback)
// Path: It is the path for which the middleware function is being called. It can be a string representing a path or path pattern or regular expression pattern to match the paths.
// Callback: It is a middleware function or a series/array of middleware functions.
app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/usergames", usergamesRoutes);


///////////////
// APP.GET() //
///////////////
// APP.GET() function routes the HTTP GET Requests to the path which is being specified with the specified callback functions. 
// Syntax: app.get( path, callback )
// Basically is it intended for binding the middleware to your application.
// Path: It is the path for which the middleware function is being called.
// Callback: Can be a middleware function or series/array of middleware functions.
app.get("*", (req, res) => {res.sendFile("/build/index.html", {root:__dirname + "/"})});    


//////////////////
// APP.LISTEN() //
//////////////////
// Required and the optional function tells it what to do when app starts up.
app.listen(PORT, () => console.log(`TodoApp server listening on port ${PORT}`));