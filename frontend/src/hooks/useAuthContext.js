import { useContext } from "react"
import { authContext } from "../context/authContext"


export const useAuthContext = ()=>{
    const context = useContext(authContext)

    if(!context){
        throw Error('use authcontext inside the context scope')
    }
    return context
}