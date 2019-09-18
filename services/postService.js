const Post = require('../models/Post')

exports.getPosts = () => {
  return Post.find()
}

exports.addPost = (caption, imageUrl, description) => {

  const post = new Post()

  post.caption = caption
  post.imageUrl = imageUrl
  post.description = description

  return post.save()
}

exports.getSinglePost = (id) => {
  return Post.findById(id)
}

exports.updatePost = () => { }

exports.deletePost = (id) => {
  return Post.findByIdAndDelete(id)
}