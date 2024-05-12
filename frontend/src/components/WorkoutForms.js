import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

export default function WorkoutForms() {
    const {dispatch}= useWorkoutsContext()
    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')
    const [error,setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const {user} =useAuthContext()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(!user) {
            setError('You Must be logged in')
            return
        }

        const workout = {title,load,reps}

        const response = await fetch('/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'content-Type':'application/json',
                'Authorization':`Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)    
        }

        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('new workout added', json)
            dispatch({type:'CREATE_WORKOUT',payload:json})
        }
    }
     
  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a new workout</h3>
        <label>Excersize Title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className={emptyFields.includes('title') ? 'error' : ''}/>

        <label>Load (Kg)</label>
        <input  type='number' value={load} onChange={(e)=>setLoad(e.target.value)} className={emptyFields.includes('load') ? 'error' : ''}/>


        <label>Reps</label>
        <input type="number" value={reps} onChange={(e)=>setReps(e.target.value)} className={emptyFields.includes('reps') ? 'error' : ''}/>

        <button>Add workout</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}
