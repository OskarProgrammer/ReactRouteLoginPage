import { NavLink, Outlet, useLoaderData} from "react-router-dom"


export const HomeLayout = () => {
    const data = useLoaderData()
    
    return (
        <div className="root-layout">
            <header>
                <nav>   
                    {data.isAdmin == "true" ? <NavLink className="adminPanelBtn" to="adminPanel"> Admin Panel </NavLink> : ""}
                    <NavLink to="/"> Home </NavLink>
                    {data.isLogged ? <NavLink to="logOut"> Log Out </NavLink> : <>
                        <NavLink to="loginPage"> Login </NavLink>
                        <NavLink to="registerPage"> Register </NavLink>
                    </>}
                    
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

//loader function
export const isLoggedUser = async () => {
    const res = await fetch("http://localhost:2000/currentUser/0")

    return res.json()
}