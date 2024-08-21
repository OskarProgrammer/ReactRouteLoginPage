import { Link, redirect, useLoaderData, useNavigate } from "react-router-dom"

export const UsersList = () => {
    const users = useLoaderData()

    const removeUser = async (id) => {
    
        const requestOptions = {
            method: "delete",
        }
        await fetch (`http://localhost:2000/users/${id.toString()}`,requestOptions)

        useNavigate(0)
    }

    return(
        <div>
            {users.map(user => (
                <div className="userTab">
                    <Link to={`/adminPanel/${user.id}`} key={user.id}>
                        <p>Username: {user.name}</p>
                        <p>Password: {user.password}</p>
                    </Link>
                    <div>
                        <button onClick={()=>{removeUser(user.id)}}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export const loadData = async () => {
    const res = await fetch("http://localhost:2000/users/")
    return res.json()
}