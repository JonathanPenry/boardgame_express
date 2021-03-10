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



//// FROM MIKE's TODOS_API
// const pool = require("../config/mysql.conf");

// async function add(res, todo, userID) {
//   try {
//     // check that they gave us a userID
//     // check that they gave us a task between 1 and 40 characters
//     if (
//       !todo.task ||
//       todo.task.length < 1 ||
//       todo.task.length > 40 ||
//       isNaN(userID)
//     ) {
//       throw "Invalid data provided";
//     }
//     // try to add it
//     await pool.query(
//       "INSERT INTO todos (user_ID, task, completed) VALUES (?,?,false)",
//       [userID, todo.task]
//     );
//     // if successful send a success message
//     return res.send({
//       success: true,
//       data: "Successfully Added the Todo",
//       error: null,
//     });
//   } catch (err) {
//     console.log(err);
//     // send an error message
//     return res.send({
//       success: false,
//       data: null,
//       error: err,
//     });
//   }
// }

// async function remove(res, id, userID) {
//   try {
//     // try to delete
//     await pool.query(
//       "DELETE FROM todos WHERE todos.id = ? AND todos.user_ID = ?",
//       [id, userID]
//     );
//     // if successful send a success message
//     return res.send({
//       success: true,
//       data: "Successfully Deleted",
//       error: null,
//     });
//   } catch (err) {
//     return res.send({
//       success: false,
//       data: null,
//       error: err,
//     });
//   }
// }

// async function edit(res, todo, userID) {
//   try {
//     // check for valid info
//     if (
//       isNaN(todo.id) ||
//       !todo.task ||
//       todo.task.length < 1 ||
//       todo.task.length > 40 ||
//       typeof todo.completed !== "boolean"
//     ) {
//       throw "Invalid data provided";
//     }
//     // try to update it
//     await pool.query(
//       "UPDATE todos SET task = ?, completed = ? WHERE id = ? AND user_ID = ?",
//       [todo.task, todo.completed, todo.id, userID]
//     );
//     // send success message
//     return res.send({
//       success: true,
//       data: "Successfully updated the todo",
//       error: null,
//     });
//   } catch (err) {
//     return res.send({
//       success: false,
//       data: null,
//       error: err,
//     });
//   }
// }

// async function all(res) {
//   try {
//     // get by userID
//     const [todos] = await pool.query("SELECT * FROM todos");
//     // send success message
//     res.send({
//       success: true,
//       data: todos,
//       error: null,
//     });
//   } catch (err) {
//     return res.send({
//       success: false,
//       data: null,
//       error: err,
//     });
//   }
// }

// async function byUserID(res, userID) {
//   try {
//     // get by userID
//     const [
//       todos,
//     ] = await pool.query("SELECT * FROM todos WHERE todos.user_ID = ?", [
//       userID,
//     ]);
//     // send success message
//     res.send({
//       success: true,
//       data: todos,
//       error: null,
//     });
//   } catch (err) {
//     return res.send({
//       success: false,
//       data: null,
//       error: err,
//     });
//   }
// }

// module.exports = { add, remove, edit, all, byUserID };