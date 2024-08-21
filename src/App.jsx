import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider }  from 'react-router-dom'
import './App.css'

//pages
import { LoginPage, usersDataLoader } from './pages/LoginPage'
import { MainPage } from './pages/MainPage'
import {RegisterPage} from "./pages/RegisterPage"
import { ErrorPage } from './pages/ErrorPage'


//layouts
import { HomeLayout } from './layouts/HomeLayout'

//functions 
import { currentUserLoader } from './layouts/HomeLayout'

//routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' loader={currentUserLoader} element={<HomeLayout/>}>
        <Route index element={<MainPage/>}/>
        <Route path={"loginPage"} loader={usersDataLoader} element={<LoginPage/>}/>
        <Route path={"registerPage"} element={<RegisterPage/>}/>
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
