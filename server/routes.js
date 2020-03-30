const express = require('express');
const path = require('path');
const db = require('./models');

const router = new express.Router();

router.get('/api/workouts', (req, res) => {
    console.log('hit /api/workouts/ GET')

    db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts)
        })
        .catch(err => {
            res.json(err)
        })
})

router.put('/api/workouts/:id', (req, res) => {
    console.log('hit /api/workouts/:id PUT')
})

router.post('/api/workouts', (req, res) => {
    console.log('hit /api/workouts/ POST')
})

router.get('/api/workouts/range', (req, res) => {
    console.log('hit /api/workouts/range GET')
})




/* Navigation routes */
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
})

router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
})

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'stats.html'));
})

module.exports = router;