const express = require('express');
const router = express.Router();
const Controller = require('../controller/post.model.controller');
const db = require('../models');
const { responseHelper } = require("../helpers/response.helper");

router.post('/create-post', Controller.createPost);

router.get('/getPosts', Controller.GetPosts);

router.patch('/updatePost', Controller.updatePost);

router.get('/get-posts-by-type', Controller.filterPostByType);

router.get('/get-posts-by-uploader', Controller.filterPost_uploadedBy);

module.exports = router;

