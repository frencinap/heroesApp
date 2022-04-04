import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/index'

export const LoginScreen = () => {
  const navigate =  useNavigate()
  const { dispatch } = useContext(AuthContext)

  const handleLogin =()=> {

    const action = {
      type: types.login,
      payload: { name: 'Francis' }
    }
    dispatch(action)

    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    navigate( lastPath , {
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
