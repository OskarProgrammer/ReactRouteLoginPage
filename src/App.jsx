import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider }  from 'react-router-dom'
import './App.css'

//pages
import { loginAction, LoginPage } from './pages/LoginPage'
import { MainPage } from './pages/MainPage'
import {RegisterPage} from "./pages/RegisterPage"
import { ErrorPage } from './pages/ErrorPage'
import { LogOut } from './pages/LogOut'


//layouts
import { HomeLayout } from './layouts/HomeLayout'

//functions 
import { isLoggedUser } from './layouts/HomeLayout'

//routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' loader={isLoggedUser} element={<HomeLayout/>}>
        <Route index element={<MainPage/>}/>
        <Route path={"loginPage"} element={<LoginPage/>} action={loginAction}/>
        <Route path={"registerPage"} element={<RegisterPage/>}/>
        <Route path={"logout"} element={<LogOut/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
