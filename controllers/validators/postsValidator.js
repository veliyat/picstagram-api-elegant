exports.addPostValidator = (req, res, next) => {

  const { caption, description, imageUrl } = req.body
  let errors = {}

  if (caption === '') errors.caption = 'Caption can not be blank.'
  if (description === '') errors.description = 'Description can not be blank.'
  if (imageUrl === '') errors.imageUrl = 'Image Can not be blank.'

  if (Object.keys(errors).length === 0) {
    next()
  } else {
    res.status(400).json(errors)
  }
}
