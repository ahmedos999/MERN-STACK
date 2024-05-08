import { useContext } from "react"
import { authContext } from "../context/authContext"


export const useAuthContext = ()=>{
    const context = useContext(authContext)

    if(!context){
        throw Error('useAuthontext must be used inside AuthContextProvider')
    }
    return context
}