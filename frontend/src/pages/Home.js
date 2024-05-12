import { useEffect } from "react"
import React from 'react'
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForms from "../components/WorkoutForms"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import {useAuthContext} from '../hooks/useAuthContext'


export default function Home() {

    const {workouts,dispatch}= useWorkoutsContext()
    const {user} = useAuthContext()
    
useEffect(()=>{
    const fetchWorkout = async ()=>{
       const response = await fetch('/api/workouts',{
        headers:{
            'Authorization':`Bearer ${user.token}`
        }
       })
       const json = await response.json()

       if(response.ok){
           dispatch({type:'SET_WORKOUTS',payload:json})
       }
    }
    if(user){fetchWorkout()}
    
},[dispatch,user])
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
