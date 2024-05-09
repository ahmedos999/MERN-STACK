import { useContext } from "react"
import { AuthContext } from "../context/authContext"


export const useAuthContext = ()=>{
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuthontext must be used inside AuthContextProvider')
    }
    return context
}