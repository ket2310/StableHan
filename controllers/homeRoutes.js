const router = require('express').Router();
const { Rider } = require('../models');
const withAuth = require('../utils/auth');
const farm = require('../models/Farm.json');

router.get('/', async (req, res) => {
    farm.task = "Welcome to your Stable Hand!";
    res.render('index', farm)
});

router.get('/viewSchedule', async (req, res ) =>{
    farm.task = "Lesson Schedule for the Week of: ";
    res.render('lessonScheduleView', farm);
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
