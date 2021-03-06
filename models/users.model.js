////////////
// MODELS //
////////////
// The data model is a Javascript module that connects to the database and 
// exports some functions that let us operate on the data.
// Models are made for each table on the database
// All models will need to be attached to routes


/////////////
// IMPORTS //
/////////////
const pool = require("../config/mysql.conf");   // Using pool to talk to database
const bcrypt = require("bcrypt");               // Password hashing


////////////
// SIGNUP //
////////////
// Async function with try & catch
// Helper function to determine if username and password are valid
function isValid(val, min, max) {
    return !val || val.length < min || val.length > max;
}

async function signUp(res, username, password) {
    try {
        // Are username and password between 8-20 characters
        if (isValid(username, 8, 20) || (isValid(password, 8, 20))) {
            throw "Invalid login data provided";
        }
        // Check database to see if username is already taken (DB is expecting an array [rows, columns])
        let [user,] = await pool.query("SELECT * FROM users WHERE user.username = ?", [username,])
            if (user.length > 0) {throw "Username is already taken"};
        // Hash password and insert username and password into the database
        const encrypted = await bcrypt.hash(password, 8);
        await pool.query("INSERT INTO users (username, password) VALUES= (?, ?)", [username, encrypted]);
        // Send success statement
        return res.send({success: true, data: "Successfully signed up", error: null});
    } catch (err) {
        return res.send({success: false, data: null, error: err});
    }
}


///////////
// Login //
///////////
// Async function with try & catch
async function login(res, username, password){
    try {
        // Check username against database for a match and throw response if not a match
        let [users] = await pool.query("SELECT * FROM users WHERE users.username = ?", [username,]);
            if (users.length === 0){throw "Invalid username or password"}
        // If username matches, check bcrypt password against database for a match
        // Username "users" from the username db query ([0] is positition in array) needed 
        const match = await bcrypt.compare(password, users[0], password)
            if (!match) {throw "Invalid username or password"};
        // Successful login
        return res.send({success: true, data: {username: users[0].username}, error: null});
    }catch {
        return res.send({success: false, data: null, error: err});
    }
}


/////////////
// EXPORTS //
/////////////
// Import into the users.routes.js
module.exports.signUp = signUp;
module.exports.login = login;