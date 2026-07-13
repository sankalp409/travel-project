module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must be logged in to create/edit/delete a listing");
    return res.redirect("/login");
  }
  next();
};

// middleware.js
module.exports.savedRedirectUrl = (req, res, next) => {
  res.locals.redirectUrl = req.session.redirectUrl || "/listings";
  next();
};
