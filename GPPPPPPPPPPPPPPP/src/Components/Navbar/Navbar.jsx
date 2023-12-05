import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({userData}) {
  return <nav className=' bg-body-secondary d-flex justify-content-around'>


    <div className='letf-nav d-flex align-items-center'>

      <h1 className='px-3'>Stack <span className='text-warning m-0'>Hub</span> <i className="fa-solid fa-code fa-sm"></i></h1>
  
  {userData > 0? 
  
      <ul className='list-unstyled d-flex m-0 align-items-center px-5 '>
        <li className='px-3'><Link to='home'><i className ="fa-solid fa-house fa-xl"></i></Link></li>
        <li className='px-3'><Link to='notification'><i className="fa-solid fa-bell fa-xl"></i></Link></li>
        <li className='px-3'><Link to='profile'><i className="fa-sharp fa-solid fa-address-card fa-xl"></i></Link></li>
        <li className='px-3'><Link to='settings'><i className="fa-solid fa-gear fa-xl"></i></Link></li>
      </ul> : ''}
     
    </div>
    

    <div className='right-nav d-flex'>

    {userData > 0? <form className="d-flex" role="search">
        <input className="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search"/>
        <button className='border-0'><i className="fa-solid fa-magnifying-glass fa-lg"></i></button>
      </form>:''}  

      <ul className='list-unstyled d-flex m-0 align-items-center px-5'>
        <li className='px-3'> <Link to='login'>Login</Link></li>
        <li className='px-3'> <Link to='/'>Register</Link></li>
      </ul>

    </div>
  </nav>
}
