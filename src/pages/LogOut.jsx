import { redirect, useLoaderData } from "react-router-dom"


export const LogOut = () => {
    const data = useLoaderData()

    return(<></>)
}

export const logOut = async () => {
    let newCurrentUser = {
        "name": "",
        "password": "",
        "personID": "",
        "isLogged": false,
        "isAdmin":false,
      }

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCurrentUser)
    }

    fetch("http://localhost:2000/currentUser/0",requestOptions)

    return redirect("/")
}


