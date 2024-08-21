
import { useLoaderData, NavLink, redirect, Form, useActionData } from "react-router-dom";
import { fetchDataFromEndpoint } from "../App";


export const LoginPage = () => {
    const data = useActionData()

    return (
        <Form method="post" action="/loginPage" >
            <h1>Login Form</h1>
            <input type="text" name="name" placeholder="Login"/>
            <input type="password" name="password" placeholder="Password"/>
            <p>Haven't got account yet? <NavLink to="/registerPage">Click Here</NavLink></p>
            {data && data.error && <p>{data.error}</p>}
            <button type="submit">Submit</button>
        </Form>
    )
}

export const loginAction = async ({ request }) => {
    let newCurrentUser = {}

    const data = await request.formData()

    const name = data.get("name")
    const password = data.get("password")

    if (name == "" || password == ""){
        return {error: "Name and password could not be null"}
    }

    const usersData = await fetchDataFromEndpoint("http://localhost:2000/users")
    
    usersData.map((user)=>{
        if (user.name == name && user.password == password){
            newCurrentUser = {
                name:user.name,
                password:user.password,
                isLogged:true,
                personID:user.id,
                isAdmin: user.isAdmin,
            }
        }
    })

    const requestOptions = {
        method: "PUT", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCurrentUser)
    }

    await fetch("http://localhost:2000/currentUser/0", requestOptions)

    if (newCurrentUser.isLogged){
        return redirect("/")
    }

    return {error: "Name or password is not valid"}
}

