import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = ()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {signup,isLoading,error} = useSignup()

    const handlesubmit = async(e)=>{
        e.preventDefault()

       await signup(email,password)
    }

    return (
        <form className="signup" onSubmit={handlesubmit}>
            <h3>Signup</h3>

            <label>Email:</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <label>password:</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup