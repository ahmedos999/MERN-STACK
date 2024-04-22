import { useEffect,useState } from "react"
import React from 'react'
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForms from "../components/WorkoutForms"



export default function Home() {

    const [workouts,setWorkouts] = useState()
    
useEffect(()=>{
    const fetchWorkout = async ()=>{
       const response = await fetch('/api/workouts')
       const json = await response.json()

       if(response.ok){
           setWorkouts(json)
       }
    }
    fetchWorkout()
},[])
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
