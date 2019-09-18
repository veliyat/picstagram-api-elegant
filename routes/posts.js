const express = require('express')
const router = express.Router()

const authenticate = require('../middlewares/authentication')
const upload = require('../middlewares/upload')

const postsController = require('../controllers/postsController')
const postsValidator = require('../controllers/validators/postsValidator')

router.use(authenticate)

router.get('/', postsController.getPosts)

router.get('/:id', postsController.getSinglePost)

router.post('/upload', [
  upload.single('image'),
  postsController.uploadFile
])

router.post('/', [
  postsValidator.addPostValidator,
  postsController.addPost
])

router.delete('/:id', postsController.deletePost)

router.put('/:id', postsController.updatePost)

module.exports = router