// -- Authorisation Middleware Helper --


module.exports = (req, res, next) => {
    if (!req.user) {
        res.redirect("/auth/landing");
    }
    else {
        next();
    }
}