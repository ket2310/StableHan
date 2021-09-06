const router = require('express').Router();
const { Rider } = require('../models');
const withAuth = require('../utils/auth');
const farm = require('../models/Farm.json');
const moment = require('moment')

router.get('/homepage', async (req, res) => {
    farm.task = "Welcome to your Stable Hand!";
    res.render('homepage', farm)
});

router.get('/viewSchedule', async (req, res ) =>{
    var today = moment().startOf('month').day('Tuesday').format("dddd, MMMM Do")
     farm.task = `Lesson Schedule for the Week of: ${today}`;
      

    res.render('wklyschedule', farm);
});

router.get('/newStudent', async (req, res) => {
    farm.task = "New Rider Form";
    res.render('studentEnroll', farm);
})

router.get('/listOfStudents', async (req, res) => {
    farm.task = "Student list";
    res.render('students', farm);
});

module.exports = router;
