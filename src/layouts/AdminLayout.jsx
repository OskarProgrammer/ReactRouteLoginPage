import { NavLink, Outlet, useLoaderData} from "react-router-dom"


export const AdminLayout = () => {
    const data = useLoaderData()

    return (
        <div className="admin-layout">
            <div className="navBarAdmin">
                <NavLink to="usersList"> Users List </NavLink>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}