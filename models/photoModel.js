const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
})

module.exports = new mongoose.model('Photo', photoSchema)