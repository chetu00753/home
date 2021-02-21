const express = require('express');
const router = express.Router();
const Controller=require('../controller/post.model.controller');
const db = require('../models');
const {responseHelper} = require("../helpers/response.helper");

router.post('/create-post',Controller.createPost);

module.exports=router;