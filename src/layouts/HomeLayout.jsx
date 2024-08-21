import { NavLink, Outlet, useLoaderData} from "react-router-dom"

export const HomeLayout = () => {
    const currentUserData = useLoaderData()

    return (
        <div className="root-layout">
            <header>
                <nav>   
                    <NavLink to="/"> Home </NavLink>
                    {currentUserData[0].isLogged ? <NavLink to="logOut"> Log out </NavLink> : <NavLink to="loginPage"> Login </NavLink>}
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

//loader function
export const currentUserLoader = async () => {
    const res = await fetch("http://localhost:5000/currentUserData")
    return res.json()
}