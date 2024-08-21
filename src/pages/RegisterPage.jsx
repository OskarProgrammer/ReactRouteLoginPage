import { useState } from "react";
import { Form, NavLink, redirect, useActionData } from "react-router-dom";


export const RegisterPage = () => {
    const data = useActionData()

    return (
        <Form method="post" action="/registerPage">
            <h1>Register Form</h1>
            <input type="text" name="name" placeholder="Login"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="password" name="repeatedPass" placeholder="Repeat Password"/>

            <p>Have got account? <NavLink to="/loginPage">Click Here</NavLink></p>

            {data && data.error && <p>{data.error}</p>}

            <button type="submit">Submit</button>
        </Form>
    )
}

export const addNewUser = async ({ request }) => {
    const data = await request.formData()

    const name = data.get("name")
    const password = data.get("password")
    const repeatedPass = data.get("repeatedPass")

    console.log(name, password, repeatedPass);

    if (password != repeatedPass){
        return {error : "Password and repeated password must be the same"}
    }else if (name == "" || password == ""){
        return {error : "Name , password and repeated password could not be null"}
    }

    let newUser = {
        name: name,
        password: password,
        id: crypto.randomUUID().toString()
    }

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
    }

    await fetch ("http://localhost:2000/users", requestOptions)

    return redirect("/loginPage")
}

