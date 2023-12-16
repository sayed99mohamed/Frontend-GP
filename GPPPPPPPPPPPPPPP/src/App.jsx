import React, {useEffect, useState } from 'react'
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
import Authentication from './Components/Authentication/Authentication'
import PathNotExist from './Components/PathNotExist/PathNotExist'
import Project from './Components/Project/Project'

export default function App() {
  //handel el refresh الداتا متضيعش بمجرد معمل ريفريش
  useEffect(()=> {
    if(localStorage.getItem('userToken')!==null){
      saveUserData()
    }
  },[])

  let [userData , setUserData] = useState(null)

  function saveUserData(){
   let encodedToken = localStorage.getItem('userToken')
  //  console.log(localStorage.getItem('userToken'))
   let decodedToken = jwtDecode(encodedToken)
   setUserData(decodedToken)
   //  let x = decodedToken.uid
   //  console.log(x)
  }


  let routers = createBrowserRouter([{
     path:'/', element:<Layout setUserData={setUserData} userData={userData}/> , children :[
    { index: true, element:<Register/>},
    {path:'home', element:<Authentication><Home/></Authentication>},
    { path:'login', element:<Login saveUserData ={saveUserData}/>},
    { path:'notification', element:<Authentication><Notification/></Authentication>},
    { path:'profile', element:<Authentication><Profile/></Authentication>},
    { path:'bookmark', element:<Authentication><Bookmark/></Authentication>},
    { path:'project', element:<Authentication><Project/></Authentication>},
    { path:'settings', element:<Authentication><Settings/></Authentication>},
    { path:'*', element: <PathNotExist/>}
    
    ]}])
  
  return (
    <RouterProvider router={routers}/>
  )
}

