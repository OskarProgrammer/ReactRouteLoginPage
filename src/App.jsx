import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider }  from 'react-router-dom'
import './App.css'

//pages
import { loginAction, LoginPage } from './pages/LoginPage'
import { MainPage } from './pages/MainPage'
import {addNewUser, RegisterPage} from "./pages/RegisterPage"
import { ErrorPage } from './pages/ErrorPage'
import { logOut, LogOut } from './pages/LogOut'
import { loadData, UsersList } from './pages/UsersList'
import { UserDetails, userDetailsLoader } from './pages/UserDetails'
import { ErrorAdmin } from './pages/ErrorAdmin'


//layouts
import { HomeLayout } from './layouts/HomeLayout'
import { AdminLayout } from './layouts/AdminLayout'


//functions 
import { isLoggedUser } from './layouts/HomeLayout'


//routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' loader={isLoggedUser} element={<HomeLayout/>}>
        <Route index element={<MainPage/>}/>
        <Route path="loginPage" element={<LoginPage/>} action={loginAction}/>
        <Route path="registerPage" element={<RegisterPage/>} action={addNewUser}/>
        <Route path="logout" loader={logOut} element={<LogOut/>}/>
        <Route path="adminPanel" element={<AdminLayout/>} errorElement={<ErrorAdmin/>}>
            <Route path="usersList" loader={loadData} element={<UsersList/>}/>
            <Route path=":id" loader={userDetailsLoader} element={<UserDetails/>}/>
        </Route>

        <Route path="*" element={<ErrorPage/>}/>
    </Route>
  )
)


//fetching data from endpoint 
export const fetchDataFromEndpoint = async (endpoint) => {
  const response = await fetch(endpoint)
  return (response.json())
}

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
