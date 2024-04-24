import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";


export const useWorkoutsContext = () =>{
    const context = useContext(WorkoutsContext)

    if(!context){
        throw Error('useWorkcontext must be used inside WorkoutContextProvider')
    }


    return context
}
