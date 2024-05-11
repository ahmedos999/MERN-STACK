import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = ()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login,error,isLoading} =  useLogin()

    const handlesubmit = async(e)=>{
        e.preventDefault()
        login(email,password)
        // console.log(email,password)
    }

    return (
        <form className="login" onSubmit={handlesubmit}>
            <h3>Login</h3>

            <label>Email:</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <label>password:</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            <button disabled={isLoading}>Login in</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login