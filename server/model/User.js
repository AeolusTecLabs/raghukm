const mongoose = require("mongoose");

const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    backlog: {
      type: Schema.ObjectId,
      ref: 'Backlog'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  })
  
module.exports = mongoose.model('User', UserSchema);