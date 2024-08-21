
import { useLoaderData, NavLink, redirect, Form } from "react-router-dom";

const getData = async () => {
    const res = await fetch ("http://localhost:2000/users")
    return res.json()
}


export const LoginPage = () => {

    return (
        <Form method="post" action="/loginPage" >
            <h1>Login Form</h1>
            <input type="text" name="name" placeholder="Login"/>
            <input type="password" name="password" placeholder="Password"/>
            <p>Haven't got account yet? <NavLink to="/registerPage">Click Here</NavLink></p>
            <button type="submit">Submit</button>
        </Form>
    )
}

export const loginAction = async ({ request }) => {
    let newCurrentUser = {}

    const data = await request.formData()

    const name = data.get("name")
    const password = data.get("password")

    const dbLogins = getData()
    console.log(dbLogins);

    dbLogins.map((login)=>{
        if (login.name == name && login.password == password) {
            newCurrentUser.name = login.name
            newCurrentUser.password = login.password
            newCurrentUser.personID = login.id
            newCurrentUser.isLogged = true
        }
    })

    if (newCurrentUser == {}) {
        throw Error("Invalid login or password")
    }else{

        const requestOptions = {
            method: "PUT", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCurrentUser)
        }

        fetch ("http://localhost:2000/currentUser/0", requestOptions)
        return
    }
}

