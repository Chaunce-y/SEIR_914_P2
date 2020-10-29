const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
  user: String,
  url: String
 })

module.exports = new mongoose.model('Photo', photoSchema)