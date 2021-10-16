import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { login } from '../../redux/actions/auth.action';

import './_loginScreen.scss'

const LoginScreen = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(state => state.auth.accessToken)
    console.log(accessToken, "login screen")

   const handleLogin = () => {
      dispatch(login())
   }

   const history = useHistory()

   useEffect(() => {
      if (accessToken) {
         history.push('/')
      }
   }, [accessToken, history])


    return (
        <div className="login">
            <div className="login__container">
                <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=""/>
               
                <button onClick={handleLogin}>Login with Google</button>
            </div>
        </div>
    ) 
}

export default LoginScreen
