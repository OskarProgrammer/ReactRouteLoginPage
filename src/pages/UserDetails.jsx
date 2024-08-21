import { useLoaderData, useParams } from "react-router-dom"

export const UserDetails = () => {
    const {id} = useParams()
    const user = useLoaderData()

    return (
        <div>
            {id}
        </div>
    )
}

export const userDetailsLoader = async ({ params })  => {
    const { id } = params

    const data = await fetch(`http://localhost:2000/users/${id}`)
    if (!data.ok) {
        throw Error("COULDNT FIND THAT USER")
    }

    return data.json()
}