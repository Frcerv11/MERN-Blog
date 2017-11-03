const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const multerOptions = {
  storage: multer.memoryStorage(),
  inMemory:true,
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/');
    if(isPhoto) {
      next(null, true);
    } else {
      next({ message: 'That filetype isn\'t allowed!' }, false);
    }
  }
};
exports.upload = multer(multerOptions).single('photo');

exports.resize = async (req, res, next) => {

  if (!req.file) {
    next(); 
    return;
  }
  const extension = req.file.mimetype.split('/')[1];
  req.body.photo = `${uuid.v4()}.${extension}`;
  // now we resize

  const photo = await jimp.read(req.file.buffer);
  await photo.resize(800, jimp.AUTO);
  await photo.write(`./public/uploads/${req.body.photo}`);
 
  next();
};

exports.addPost = (req, res) => {
  console.log(req.body.photo)
  var post = new Post({ title: req.body.title, author:req.body.author, description: req.body.body,img:req.body.photo });
  post.save()
  .then(post => {
    res.json(post);
  })
  .catch(err => {
    res.status(400).send("unable to save to database");
  });
};

exports.getPosts = async(req, res) => {
	const posts = await Post.find().sort({$natural:-1});
  res.json(posts)
};
