const router = require('express').Router();
const { user } = require('../../models');
const UserController = require('../../controllers/UserController.js');
const bcrypt = require('bcryptjs');

router.get('/',async(req, res) => {
    const user = await user.findAll();
    res.status(200).json(user);
});

router.post('/register',async(req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await user.create(req.body);
    res.status(200).json(user);
});


router.post('/signin', UserController.signin);

module.exports = router;