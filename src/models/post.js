const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    author: { type: String, required: true, minlength: 3, maxlength: 30 },
    place: { type: String, maxlength: 50 },
    description: { type: String, maxlength: 150 },
    hashtags: { type: String, maxlength: 150 },
    image: { type: String, required: true },
    likes: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
