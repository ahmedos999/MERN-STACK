const express = require('express')
const Workout =  require('../models/workoutModels')

const router = express.Router()


// get all workouts
router.get('/',(req,res)=>{
    res.json({mssg:'Get all workouts'})
})

// get one workout
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get single workouts'})
})

// Post new workout
router.post('/',async (req,res)=>{
    const {title, load,reps} = req.body

    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error:error.message})
    }
})

// Delete a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete single workouts'})
})

// Update a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'Update a workouts'})
})

module.exports = router