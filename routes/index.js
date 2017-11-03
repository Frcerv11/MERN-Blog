const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const mongoose = require('mongoose');
const Post = mongoose.model('Post');

router.post('/add',
  postController.upload,
  postController.resize,
  postController.addPost
);

router.get('/posts',postController.getPosts);

module.exports = router;