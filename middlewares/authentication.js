const User = require('../models/User')

function authenticate(req, res, next) {

  if (req.method === 'OPTIONS') {
    next();
  } else {
    let token = null;
    if (typeof req.headers.authorization !== 'undefined') {
      token = req.headers['authorization'].split(' ')[1]
    }

    if (User.isValidToken(token)) {
      next()
    } else {
      res.status(401).json({
        msg: 'Not Authorized'
      })
    }
  }
}

module.exports = authenticate