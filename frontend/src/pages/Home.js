import { useEffect } from "react"
import React from 'react'
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForms from "../components/WorkoutForms"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"



export default function Home() {

    const {workouts,dispatch}= useWorkoutsContext()
    
useEffect(()=>{
    const fetchWorkout = async ()=>{
       const response = await fetch('/api/workouts')
       const json = await response.json()

       if(response.ok){
           dispatch({type:'SET_WORKOUTS',payload:json})
       }
    }
    fetchWorkout()
},[dispatch])
  return (
    <div className='home'>
        <div className="workouts">
            {workouts && workouts.map((workout)=>(
                <WorkoutDetails key={workout._id} workout={workout}></WorkoutDetails>
            ))}
        </div>
        <WorkoutForms></WorkoutForms>
    </div>
  )
}
