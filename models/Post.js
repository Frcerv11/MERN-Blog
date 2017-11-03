const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Please enter a title!'
  },
  author: {
  	type: String,
    trim: true,
    required: 'Please enter an author!'
  },
  description: {
  	type: String,
    trim: true,
    required: 'Please enter a description!'
  },
  img:{
    type: String
  },
  created_at: Date,
  updated_at: Date
});


postSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;
  
  next();
});

module.exports = mongoose.model('Post', postSchema);
