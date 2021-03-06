////////////
// MODELS //
////////////
// The data model is a Javascript module that connects to the database and 
// exports some functions that let us operate on the data.

// Models are made for each table on the database
// All models will need to be attached to routes (here it's todos.routes.js)
// Todos need to CRUD (Create/Read/Update/Delete)
const pool = require("../config/mysql.conf")

