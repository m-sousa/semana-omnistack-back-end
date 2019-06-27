const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const Post = mongoose.model(
  "Post",
  new mongoose.Schema(
    {
      author: { type: String, required: true, minlength: 3, maxlength: 30 },
      place: { type: String, maxlength: 50 },
      description: { type: String, maxlength: 150 },
      hashtags: { type: String, maxlength: 150 },
      image: { type: String, required: true },
      likes: { type: Number, default: 0 }
    },
    { timestamps: true }
  )
);

function validatePost(post) {
  const schema = Joi.object().keys({
    author: Joi.String()
      .minlength(3)
      .maxlength(30)
      .required(),
    place: Joi.String().maxlength(50),
    description: Joi.String().maxlength(150),
    hashtags: Joi.String().maxlength(150),
    image: Joi.String().required()
  });
  return Joi.validate(post, schema);
}

exports.validate = validatePost;
exports.Post = Post;
