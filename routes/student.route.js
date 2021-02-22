const express = require('express');
const router = express.Router();
const Controller=require('../controller/students_controller');
const db = require('../models');
const {responseHelper} = require("../helpers/response.helper");
const { students } = require('../models');

router.post('/create-student',Controller.create);

module.exports=router;