const express = require('express')

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
router.post('/',(req,res)=>{
    res.json({mssg:'Post single workouts'})
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