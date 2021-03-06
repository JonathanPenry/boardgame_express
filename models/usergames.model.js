////////////
// MODELS //
////////////
// The data model is a Javascript module that connects to the database and 
// exports some functions that let us operate on the data.
// Models are made for each table on the database
// All models will need to be attached to routes (here it's usergames.routes.js)
// Games favorites need CRUD (Create/Read/Update/Delete)

/////////////
// IMPORTS //
/////////////
const pool = require("../config/mysql.conf")


///////////////////
// ADD FAVORITES //
///////////////////
async function add(res, game) {
    try {
        // Checking to see if they gave us an ID already happens on the route side
        // Use userid to request all games on usergames DB with userid

    }catch {
        return res.send({success: false, data: null, error: err});
    }
}


//////////////////////
// DELETE FAVORITES //
//////////////////////
async function remove(res, id) {
    try {
        // Checking to see if they gave us an ID already happens on the route side
        await pool.query("DELETE FROM usergames WHERE usergames.id = ?", [id]);
        return res.send({success: true, data: "Game has been removed", error: null});
    }catch {
        return res.send({success: false, data: null, error: err});
    }
}


//////////////////
// UPDATE OWNED //
//////////////////
// Indicate whether they own the game (need Boardgame React App buttons/functionality added)
async function owned(res, game) {
    try {
        // Checking to see if they gave us an ID already happens on the route side

    }catch {
        return res.send({success: false, data: null, error: err});
    }
}


////////////////////////
// LOAD GAMES BY USER //
////////////////////////
// Indicate whether they own the game (need Boardgame React App buttons/functionality added)
// Pass in the things that are needed for the action (response, id)
async function byUserID(res, usersID) {
    try {
        // Checking to see if they gave us an ID already happens on the route side
        // Request usergames for user from the DB
        const [games] = await pool.query("SELECT * FROM usergames WHERE usergames.userID = ?", [usersID])
        return res.send({success: true, data: games, error: null});
    }catch {
        return res.send({success: false, data: null, error: err});
    }
}


/////////////
// EXPORTS //
/////////////
// Import into the usergames.routes.js
module.exports.add = add;
module.exports.remove = remove;
module.exports.owned = owned;
module.exports.byUserID = byUserID;