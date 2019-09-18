const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, require: true, unique: true },
  passwordHash: { type: String, required: true },
  active: { type: Boolean, default: true }
}, {
  timestamps: true
})

UserSchema.statics.isValidToken = function (token) {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    // console.log(payload)
    return payload
  } catch (e) {
    return false
  }
}

UserSchema.methods.genPasswordHash = function (password) {
  const salt = bcrypt.genSaltSync(10)
  this.passwordHash = bcrypt.hashSync(password, salt)
}

UserSchema.methods.isValidPassword = function (password) {
  return bcrypt.compareSync(password, this.passwordHash)
}

UserSchema.methods.genToken = function () {
  const payload = {
    name: this.name,
    email: this.email
  }

  return jwt.sign(payload, process.env.JWT_SECRET)
}

UserSchema.methods.genUserObj = function () {
  return {
    name: this.name,
    email: this.email,
    token: this.genToken()
  }
}

module.exports = mongoose.model('User', UserSchema)