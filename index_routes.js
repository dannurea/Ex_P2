const express = require('express');

const {updateData, getData} = require('../Controllers');
const router = express.Router();

router.update('/update-user-data/:id', updateData);
router.get('/get-user-data/:id', getData);