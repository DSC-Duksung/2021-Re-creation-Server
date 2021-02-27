const express = require('express');
const { Category, Step } = require('../models');
const router = express.Router();

router.get('/search', async (req, res, next) => {
    try {
        const steps = await Category.findAll({
            include: [{
                model: Step,
                as: 'Steps',
            }],
        });

        res.json(steps);

    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;