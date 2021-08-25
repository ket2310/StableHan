const router = require('express').Router();
const lessonRoutes = require('./lessonRoute');

router.use('/lessons', lessonRoutes);

module.exports = router;
