const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const {createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)


// get all workouts
router.get('/',getWorkouts)

// get one workout
router.get('/:id',getWorkout)

// Post new workout
router.post('/',createWorkout)

// Delete a workout
router.delete('/:id',deleteWorkout)

// Update a workout
router.patch('/:id',updateWorkout)

module.exports = router