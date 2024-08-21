import { NavLink } from "react-router-dom"


export const ErrorPage = () => {
    return(
       <>
         <h2>Ups! Wrong Link!</h2>
         <NavLink to="/">Home Page </NavLink>
       </>
    )
}