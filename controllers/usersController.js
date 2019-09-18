const User = require('../models/User')

exports.login = (req, res) => {
  const { username, password } = req.body

  User.findOne({ username })
    .then(user => {
      if (user) {
        if (user.isValidPassword(password)) {
          res.json(user.genUserObj())
        } else {
          res.status(401).json({
            msg: 'Invalid Credentials.'
          })
        }
      } else {
        res.status(401).json({
          msg: 'User not found.'
        })
      }
    })
    .catch(() => {
      res.status(500).json({
        msg: 'Something went wrong.'
      })
    })

}

exports.register = (req, res) => {
  const { name, email, username, password } = req.body

  const user = new User();

  user.name = name;
  user.email = email
  user.username = username

  user.genPasswordHash(password);

  user.save().then(data => {
    res.json(data.genUserObj())
  })
}