const express = require('express');
const multer = require('multer');
const path = require('path');
const { addUser, getUsers } = require('../controllers/userController');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Routes
router.post('/add', upload.single('photo'), addUser);
router.get('/users', getUsers);

module.exports = router;
