const express = require('express')
const {createWorkout,
    getWorkouts,
    getWorkout
} = require('../controllers/workoutController')

const router = express.Router()


// get all workouts
router.get('/',getWorkouts)

// get one workout
router.get('/:id',getWorkout)

// Post new workout
router.post('/',createWorkout)

// Delete a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete single workouts'})
})

// Update a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'Update a workouts'})
})

module.exports = router