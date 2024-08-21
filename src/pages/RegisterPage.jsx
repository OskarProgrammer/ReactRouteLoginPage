import { useState } from "react";
import { NavLink } from "react-router-dom";


export const RegisterPage = () => {
    const [login, setLogin] = useState("")
    const [password,setPassword] = useState("")
    const [repeatedPassword, setRepeatedPassword] = useState("")
    const [isError, setIsError] = useState(false)

    const addNewUser = async () => {
        if (repeatedPassword != password || login == "" || password == ""){
            setIsError(true)
        }else{
            const newUser = {
                name: login,
                password: password,
                id: crypto.randomUUID()
            }

            const requestOptions = {
                method: "POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            }

            fetch("http://localhost:5000/users/", requestOptions)

            setLogin("")
            setPassword("")
            setRepeatedPassword("")

            window.location.href = "/loginPage"
        }

    }

    return (
        <form onChange={()=>(setIsError(false))} onSubmit={(e)=>{e.preventDefault();}}>
            <h1>Register Form</h1>
            <input type="text" onChange={(e)=>(setLogin(e.target.value))} value={login} placeholder="Login"/>
            <input type="password" onChange={(e)=>(setPassword(e.target.value))} value={password} placeholder="Password"/>
            <input type="password" onChange={(e)=>(setRepeatedPassword(e.target.value))} value={repeatedPassword} placeholder="Repeat Password"/>
            <p>Have got account? <NavLink to="/loginPage">Click Here</NavLink></p>
            {isError ? <p className="errorMessage">Login or password is invalid</p>: ""}
            <button type="submit" onClick={()=>{addNewUser()}}>Submit</button>
        </form>
    )
}

