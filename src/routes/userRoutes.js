const express = require('express');
const { getUser, updateUser } = require('../controllers/userController');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();

router.get('/:id', authenticateToken, getUser);

router.put('/:id', authenticateToken, updateUser);

module.exports = router;