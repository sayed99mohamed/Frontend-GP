import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({saveUserData}) {
  let navigate = useNavigate()
  let [errorResFromApi , setErrorResFromApi] = useState('')
  let [isLoading , setIsLoading] = useState('false')

  let [user , setUser] = useState({
    email: '',
    password: ''
  })
  
//with Chat help

  async function sendLoginDataToApi() {
    try {
      let response = await axios.post('https://localhost:7134/api/Auth/login', user);
      console.log(response.data.token)
      localStorage.setItem('userToken',response.data.token)
      saveUserData()


      if (response.status === 200) {
        navigate('/home');
      } else {
        console.log('Unexpected status code:', response.status);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle 400 Bad Request
        console.log('Bad Request:', error.response.data);
        setErrorResFromApi(error.response.data); // Set error message from the API
      } else {
        // Handle other errors
        console.error('An error occurred:', error.message);
      }
    } finally {
      setIsLoading(false); // Set loading to false regardless of the outcome
    }
  }
// ---------------------------


  function submitForm(e){
    e.preventDefault()
    sendLoginDataToApi()
    setIsLoading(true)

   }

  function getUserData(e){
    let myUser = {...user}
    myUser[e.target.name] = e.target.value
    setUser(myUser)
  }
  
  return <> 




    {errorResFromApi.length > 0 ? <div className='alert alert-danger my-2'>{errorResFromApi}</div>:''}


    <form onSubmit={submitForm} className='my-4'>

      <label className='label' htmlFor="email">email :</label>
      <input onChange={getUserData} className='form-control input-form my-2' type="text" name='Email' id='' />

      <label className='label' htmlFor="password">Password :</label>
      <input onChange={getUserData} className='form-control input-form my-2' type="text" name='password' id=''/>
      
      <button type = 'submit' className=' btn btn-outline-info my-2 px-4'>
        {isLoading === true? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
      </button>

    </form>
  </>
}






// {
//   "message": null,
//   "isAuthenticated": true,
//   "username": "mmmm",
//   "email": "m@gmail.com",
//   "roles": [
//     "User"
//   ],
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtbW1tIiwianRpIjoiMDIyNjg2ZWQtYmZkNC00OGRkLWEzMjctNzU3ZTcyOGJmYmQ4IiwiZW1haWwiOiJtQGdtYWlsLmNvbSIsInVpZCI6Ijc2ZGVmOTRhLTljMTEtNDY0ZC05ZGMyLTgzNjZiOGVjYzEzNCIsInJvbGVzIjoiVXNlciIsImV4cCI6MTcwNDMwMzY2MiwiaXNzIjoiU2VjdXJlQXBpIiwiYXVkIjoiU2VjdXJlQXBpVXNlciJ9.B-no70F1ehwZk6BC7Hm38achJqWqUkHqSVXAeHJNQ7k",
//   "expiresOn": "2024-01-03T17:41:02Z"
// }


// import React, { useState } from 'react'
// import axios from 'axios'
// import { setAuthUser } from '../Helper/Helper';
// import { useNavigate } from 'react-router-dom'

// export default function Login() {
//     const navigate = useNavigate
//     const [login , setLogin] = useState({
//       email: '',
//       password: '',
//       loading: false,
//       err: []
//   });


//     const LoginFun = (e)=>{
//     e.preventDefault();
//     setLogin({...login, loading: true, err:[]});
//     axios.post('https://localhost:7134/api/Auth/login',{
//       email: login.email,
//       password: login.password
//     }).then(resp => {
//      setLogin({...login, loading: false, err:[]});
//      setAuthUser(resp.data)
//      navigate('/home')
      
//     }).catch(error =>{
//       console.log('hello')
//        setLogin({...login, loading: false, err: error.response.data.errors});
      
//     });
  
//   };

//   return <>
//   {login.err.map((error ,index)=>{
//     return  <div key={index} className='alert alert-danger'>{error.msg}</div>
//   })}
  
//   <form onSubmit={LoginFun} className='my-4'>

//       <label className='label' htmlFor="email">email :</label>
//       <input onChange={e=>setLogin({...login,email:e.target.value})} required className='form-control input-form my-2' type="email" name='Email' id=''  value={login.email}/>

//       <label className='label' htmlFor="password">Password :</label>
//       <input onChange={e=>setLogin({...login,password:e.target.value})} required className='form-control input-form my-2' type="text" name='password' id='' value={login.password}/>

//       <button type = 'submit' className=' btn btn-outline-info my-2 px-4'>
//         {login.loading === true? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
//       </button>

//   </form></>
// }





