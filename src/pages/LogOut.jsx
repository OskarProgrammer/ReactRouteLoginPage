import { redirect } from "react-router-dom"

const logOut = async () => {
    let newCurrentUser = {
        "name": "",
        "password": "",
        "personID": "",
        "isLogged": false,
      }

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCurrentUser)
    }

    fetch("http://localhost:2000/currentUser/0",requestOptions)

    redirect("/")
}


export const LogOut = () => {
    logOut()

    return(<></>)
}


