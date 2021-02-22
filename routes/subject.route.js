const express = require('express');
const router = express.Router();
const Controller=require('../controller/subject.model.controller');
const db = require('../models');
const {responseHelper} = require("../helpers/response.helper");
const { subjects } = require('../models');

router.post('/create-subject',Controller.create);

module.exports=router;