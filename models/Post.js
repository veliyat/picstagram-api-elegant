const mongoose = require('mongoose')

//3. Create a Schema (Structure)
const PostSchema = new mongoose.Schema({
  caption: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  active: { type: Boolean, default: true }
}, {
    timestamps: true
  }
)


//4. Create a model
const Post = mongoose.model('Post', PostSchema)

module.exports = Post


// class Post {
//   constructor(
//     id,
//     caption,
//     imageUrl,
//     description = ''
//   ) {
//     this.id = id;
//     this.caption = caption;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.active = true;
//     this.date = new Date();
//   }
// }

// module.exports = Post
