const passport = require('passport');

const login = passport.authenticate('google', {scope: ['profile', 'email']});

const callBack = passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/dashboard',
});

const logout = (req, res, next) => {
  req.logout(function(err) {
      if (err) return next(err);
      req.session.destroy(() => {
          res.redirect('/login');
      });
  });
};

module.exports = {login, callBack, logout}