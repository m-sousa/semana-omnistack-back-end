const express = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload");
const postController = require("../controllers/post");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get("/posts", postController.index);
routes.post("/posts", upload.single("image"), postController.store);

module.exports = routes;
