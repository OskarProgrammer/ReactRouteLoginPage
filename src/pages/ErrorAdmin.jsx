import { Link, useRouteError } from "react-router-dom"

export const ErrorAdmin = () => {
    const error = useRouteError()

    return (
        <>
            {error.message}
            <Link to="/adminPanel/usersList"> User list</Link>
        </>
    )
}