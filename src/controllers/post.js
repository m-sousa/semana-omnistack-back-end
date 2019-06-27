const { Post, validate } = require("../models/post");

module.exports = {
  async index(req, res) {
    try {
      const posts = await Post.find().sort("-createdAt");
      res.send(posts);
    } catch (error) {
      res.send(error);
    }
  },
  async store(req, res) {
    try {
      let post = ({ author, place, description, hashtags } = req.body);
      post.image = req.file.filename;
      post = new Post(post);
      post = await post.save();
      res.send(post);
    } catch (error) {
      res.send(error);
    }
  }
};
