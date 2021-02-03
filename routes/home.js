const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const message = "HOME";
        res.json(message);

    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;