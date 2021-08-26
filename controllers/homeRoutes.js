const router = require('express').Router();
const { Rider } = require('../models');
const withAuth = require('../utils/auth');
const farm = require('../models/Farm');

router.get('/', async (req, res) => {
    res.render('index', farm)
});

router.get('/viewSchedule', async (req, res ) =>{
    res.render('lessonScheduleView', farm);
});

module.exports = router;
