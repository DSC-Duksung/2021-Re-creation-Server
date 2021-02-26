const express = require('express');
const { User, Image } = require('../models');
const router = express.Router();

router.get('/mypage', async (req, res, next) => { // TODO: isLoggedIn
    try {
        const user = await User.findOne({
            where: { id: req.user.id },
            include: [{
                model: Image,
                as: 'Images',
            }],
        });

        res.json(user);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;