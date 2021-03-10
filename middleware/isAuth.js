
// Check to see if they are logged-in/authorized, then continue with the function that called it
function isAuth(req, res, next) {
    if (!req.user) {
        return res.status(401).send({ success: false, data: null, error: "Not a user" });
    }
    // Next tells it to continue the actions of the function that called isAuth
    next();
}

module.exports = isAuth;