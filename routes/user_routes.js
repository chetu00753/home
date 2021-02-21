const express = require('express');
const router = express.Router();
const Controller=require('../controller/user.model.controller');
const db = require('../models');
const {responseHelper} = require("../helpers/response.helper");
const { post } = require('../models');

router.get('/getUsers',Controller.GetUsers);

router.post('/signUp',Controller.create);

router.get('/login',Controller.Login);

router.post('/update-profile',Controller.UpdateProfile);

module.exports=router;