import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let navigate = useNavigate();

  let [errorResFromApi, setErrorResFromApi] = useState('');
  let [isLoading, setIsLoading] = useState(false);

  let [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    birthdate: '',
    phoneNumber: ''
  });

  async function sendRegisterDataToApi() {
    try {
      let response = await axios.post('https://localhost:7134/api/Auth/register', user);
      
      if (response.status === 200) {
        navigate('/login');
      } else {
        console.log('Unexpected status code:', response.status);
        navigate('/login')
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error.response.data.errors)
        console.log('Validation error:', error.response.data);
        // alert(error.response.errors.phoneNumber)
        // hena mslan ana sayeb field mesh maleha (required data)
        //moshkelt syntax m3 syntax el database (syntax error)
        
  
        // Check if there are validation errors in the "model" array
        if (error.response.data && error.response.data.model && error.response.data.model.length > 0) {
          // Log the details of each validation error
          error.response.data.model.forEach((validationError) => {
            console.log('Validation error:', validationError);
          
          });
          // ----------->alert
  
          // You may choose to display a generic validation error message to the user
          setErrorResFromApi('One or more validation errors occurred. Please check your data.');
          
        } else {
          // If no "model" array is present, display a generic error message
          setErrorResFromApi('An error occurred. Please check your registration data.');
          
        }
      } else {
        console.error('An error occurred:', error.message);
        setErrorResFromApi('An error occurred. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  }
  
  

  function submitForm(e) {
    e.preventDefault();
    setIsLoading(true);
    sendRegisterDataToApi();
  }

  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  return <>
    
      {errorResFromApi.length > 0 && <div className='alert alert-danger my-2'>{errorResFromApi} </div>}

      <form onSubmit={submitForm} className='my-5'>
        <label htmlFor="firstName" className='label'>First Name :</label>
        <input onChange={getUserData} className='form-control input-form my-2' type="text" name='firstName'/>

        <label htmlFor="lastName" className='label'>Last Name :</label>
        <input onChange={getUserData} className='form-control input-form my-2' type="text" name='lastName'/>

        <label htmlFor="username" className='label'>User Name :</label>
        <input onChange={getUserData} className='form-control input-form my-2' type="text" name='username'/>

        <label htmlFor="email" className='label'>Email :</label>
        <input onChange={getUserData} className='form-control input-form my-2' type="text" name='email'/>

        <label htmlFor="password" className='label'>Password :</label>
        <input onChange={getUserData} className='form-control input-form my-2' type="password" name='password'/>

        <label htmlFor="birthdate" className='label'>Birth Date :</label>
        <input onChange={getUserData} className='form-control input-form my-2' type="text" name='birthdate'/>

        <label htmlFor="phoneNumber" className='label'>Phone Number :</label>
        <input onChange={getUserData} className='form-control input-form my-2' type="text" name='phoneNumber'/>

        <button type='submit' className='px-4 btn btn-outline-info my-2'>
          {isLoading ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
        </button>
      </form>
 
  </>
}






// {
//   "message": null,
//   "isAuthenticated": true,
//   "username": "vv",
//   "email": "h@gmail.com",
//   "roles": [
//     "User"
//   ],
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2diIsImp0aSI6IjgxNWFmZTRhLTYyMTgtNDAzZi04MmRkLTE2MzY1YzlkN2JjOCIsImVtYWlsIjoiaEBnbWFpbC5jb20iLCJ1aWQiOiI2YTQzNTk0MC1jZDk3LTRlNTMtOWE2NS00NjE2ZDE2ODU0YmEiLCJyb2xlcyI6IlVzZXIiLCJleHAiOjE3MDQzMDY1ODUsImlzcyI6IlNlY3VyZUFwaSIsImF1ZCI6IlNlY3VyZUFwaVVzZXIifQ.YtyOEWuOqE9_3k_ESCOsW70P2OR4qYENr5BhD384WsA",
//   "expiresOn": "2024-01-03T18:29:45Z"
// }