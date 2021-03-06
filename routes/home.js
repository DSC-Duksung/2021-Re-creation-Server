const express = require('express');
const { User, Image } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => { // TODO: isLoggedIn
    try {
        const user = await User.findOne({
            where: { id: 2 }, // TODO: req.user.id
            include: [{
                model: Image,
                as: 'Images',
                attributes: ['id'], // 개수 세기 위함
            }],
        });

        res.json(user);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;