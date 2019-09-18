const postService = require('../services/postService')

exports.getPosts = (req, res) => {
  postService.getPosts()
    .then((posts) => res.json(posts))
    .catch(() => res.status(500).json({ msg: 'Somethig went wrong.' }))
}

exports.getSinglePost = (req, res) => {

  const { id } = req.params

  postService.getSinglePost(id)
    .then((post) => res.json(post))
    .catch(() => res.status(404).json({
      msg: 'Post not found'
    }))
}

exports.uploadFile = (req, res) => {
  if (typeof req.file !== 'undefined') {
    res.json({
      imageUrl: 'http://localhost:3000/images/' + req.file.filename
    })
  } else {
    res.status(400).json({
      msg: 'Please upload valid file'
    })
  }
}

exports.addPost = (req, res) => {
  const { caption, description, imageUrl } = req.body

  if (!!caption && caption !== '') {
    postService.addPost(caption, imageUrl, description)
      .then((newPost) => res.json(newPost))
      .catch(() => res.status(500).json({ msg: 'Something went wrong' }))
  } else {
    res.send('Caption can not be blank.')
  }
}

exports.deletePost = (req, res) => {
  const { id } = req.params

  postService.deletePost(id)
    .then(() => res.json({}))
    .catch(() => res.status(404).json({
      msg: 'Post not found.'
    }))
}

exports.updatePost = (req, res) => {
  res.send('PUT /posts/:id works!')
}