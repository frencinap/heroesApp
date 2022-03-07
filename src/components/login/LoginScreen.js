import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

  //customHook de react-router-dom
  const navigate =  useNavigate()

  const handleLogin =()=> {
    navigate('/', {
      replace: true
    })
  }
  return (
    <div className='container mt-2'>
        <h1>LoginScreen</h1>
        <hr/>
        <button 
          className='btn btn-primary'
          onClick={handleLogin}
          >
            Login
        </button>
    </div>
  )
}
