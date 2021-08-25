const router = require('express').Router();
const { Lesson } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newlesson = await Lesson.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newlesson);
    } catch (err) {
        res.status(400).json(`This is a ${err}`);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const lesson = await Lesson.update(
            {
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(lesson);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const lessonData = await Lesson.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!lessonData) {
            res.status(404).json({ message: 'No lesson found with this id!' });
            return;
        }

        res.status(200).json(lessonData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
