import { useState } from "react"

const Login = ()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handlesubmit = async(e)=>{
        e.preventDefault()

        console.log(email,password)
    }

    return (
        <form className="login" onSubmit={handlesubmit}>
            <h3>Login</h3>

            <label>Email:</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <label>password:</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            <button>Login in</button>
        </form>
    )
}

export default Login