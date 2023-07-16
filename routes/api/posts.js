const express = require('express');
const router = express.Router();

// @route   POST api/posts
// @desc    Register user  
// @access  Public 

router.get(
    '/', ( req, res) => res.send('posts Route')

);

module.exports = router;