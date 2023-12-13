import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({userData , logout}) {
  return <nav className=' bg-body-secondary d-flex justify-content-around'>


    <div className='letf-nav d-flex align-items-center'>

      <h1 className='px-3'>Stack <span className='text-warning m-0'>Hub</span> <i className="fa-solid fa-code fa-sm"></i></h1>
  
  {userData? 
  
      <ul className='list-unstyled d-flex m-0 align-items-center px-5 '>
        <li className='px-3'><Link to='home'><i className ="fa-solid fa-house fa-xl"></i></Link></li>
        <li className='px-3'><Link to='notification'><i className="fa-solid fa-bell fa-xl"></i></Link></li>
        <li className='px-3'><Link to='profile'><i className="fa-sharp fa-solid fa-address-card fa-xl"></i></Link></li>
        <li className='px-3'><Link to='settings'><i className="fa-solid fa-gear fa-xl"></i></Link></li>
      </ul> : ''}
     
    </div>
    

    <div className='right-nav d-flex'>
      <ul className='list-unstyled d-flex m-0 align-items-center px-5' >
        {
          userData?<>
          <form className="d-flex" role="search">
            <input className="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search"/>
            <button className='border-0'><i className="fa-solid fa-magnifying-glass fa-lg"></i></button>
          </form>
          <li onClick={logout} className='px-4'><Link to='/login'> LogOut </Link></li>
          </>:<>
          <li className='px-2'><Link to='/'> Register </Link></li>
          <li className='px-2'><Link to='/login'> Login </Link></li>
          </>
        }

      </ul>
    </div>
 </nav>

}

