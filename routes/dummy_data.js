const express = require('express');
const router = express.Router();

const db = require('../models');
const {responseHelper} = require("../helpers/response.helper");

router.post('/dummy-data', (req, res) => {
    try {
        db.user.bulkCreate([
            {
                "first_name": "customer",
                "last_name": "kumar",
                "mobile":12345,
                "email": "customer@gmail.com",
                "username": 'user1',
                "password":'1234',
            },
            {
                "first_name": "chef",
                "last_name": "kumar",
                "mobile":987678,
                "email": "chef@gmail.com",
                "username": 'user2',
                "password":'1234',
            },
            {
                "first_name": "admin",
                "last_name": "kumar",
                "mobile":54321,
                "email": "admin@gmail.com",
                "username": 'user3',
                "password":'1234',
            },
        ])
        responseHelper(res, true, "Dummy Data added", 'Dummy Data created successfully');
    } catch (err) {
        responseHelper(res, true, "Failed to create dummy data", 'Dummy Data created failed');
    }
})

module.exports = router;