import { useState } from "react";
import { useLoaderData, NavLink, redirect } from "react-router-dom";


export const LoginPage = () => {
    const usersData = useLoaderData()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [isError, setIsError ] = useState(false)

    const checkLogin = () => {
        usersData.map((user)=>{
            if (user.password == password && user.name == login){

                const newCurrentUserData = {
                    id: user.id,
                    isLogged: true
                }

                const requestOptions = {
                    method: "PUT", 
                    body: JSON.stringify(newCurrentUserData),
                }

                const response = fetch("http://localhost:5000/currentUserData/0", requestOptions)
                console.log(response);
            }
        })
        
        if (isError) {
            setIsError(true)
        }
    }

    return (
        <form onChange={()=>{setIsError(false)}} onSubmit={(e)=>{e.preventDefault();}}>
            <h1>Login Form</h1>
            <input type="text" value={login} onChange={(e)=>(setLogin(e.target.value))} placeholder="Login"/>
            <input type="password" value={password} onChange={(e)=>(setPassword(e.target.value))} placeholder="Password"/>
            <p>Haven't got account yet? <NavLink to="/registerPage">Click Here</NavLink></p>
            {isError ? <p className="errorMessage">Login or password is invalid</p> : ""}
            <button type="submit" onClick={() => {checkLogin()}}>Submit</button>
        </form>
    )
}

export const usersDataLoader = async() => {
    const res = await fetch("http://localhost:5000/users")
    return res.json()
}

