const router = require('express').Router();
const { Rider } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res .render('lessonscheduleview')
});


module.exports = router;
