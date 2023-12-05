import React, {useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Notification from './Components/Notification/Notification'
import Profile from './Components/Profile/Profile'
import Bookmark from './Components/Bookmark/Bookmark'
import Settings from './Components/Settings/Settings'
import { jwtDecode } from 'jwt-decode'


export default function App() {



  let [userData , setUserData] = useState(null)
  function saveUserData(){
   let encodedToken = localStorage.getItem('userToken')
   let decodedToken = jwtDecode(encodedToken)
   setUserData(decodedToken)
  }


  let routers = createBrowserRouter([{
     path:'/', element:<Layout userData={userData}/> , children :[
    { index: true, element:<Register/>},
    {path:'home', element:<Home/>},
    { path:'login', element:<Login saveUserData ={saveUserData}/>},
    { path:'notification', element:<Notification/>},
    { path:'profile', element:<Profile/>},
    { path:'bookmark', element:<Bookmark/>},
    { path:'settings', element:<Settings/>}
    
    ]}])
  
  return (
    <RouterProvider router={routers}/>
  )
}

