import React, { useState } from "react";
import { LoginAPI, RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import { useNavigate } from "react-router-dom";
import '../Sass/RegisterComponent.scss';
import LinkedinLogo from '../assets/linkedinLogo.png'
import { toast } from "react-toastify";
import GoogleButton from 'react-google-button'

export default function RegisterComponent(props) {
    const [credentials, setCredentials] = useState({})
    const [showPassword, setShowPassword] = useState(false)

    let navigate = useNavigate()
    const login = async () => {
        try{
            let res = await RegisterAPI(credentials.email, credentials.password)
            toast.success('You created a new account')
            navigate('/home')
        } catch(error) {
            console.log(error)
            toast.error('This account already exists')
        }
    }


    const googleSignIn = () => {
        let response = GoogleSignInAPI()
        navigate('/home')
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="register">
            <img src={LinkedinLogo} className="linkedinLogo" />
            <div className="register__container">
                <h1 className="register__heading">Make the most of your professional life</h1>
                <div className="register__box">
                    <div className="register__form form">
                        <input 
                            type="email" 
                            className="form__email" 
                            placeholder="Email" 
                            onChange={(event) => setCredentials({ ...credentials, email: event.target.value })
                        } />
                        <div className="form__password-div">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                className="form__password" 
                                placeholder="Password (6 or more characters)" 
                                onChange={(event) => setCredentials({ ...credentials, password: event.target.value })
                            } />
                            <span onClick={toggleShowPassword} className="form__show-pas">
                                {showPassword ? "hide" : "show"}
                            </span>
                        </div>
                        <button onClick={login} className="form__btn">
                            Agree & Join
                        </button>
                    </div>
                    <hr className="register__hr-text" data-content="or"></hr>
                    <button className="form__google-signIn" onClick={googleSignIn}>
                        <GoogleButton />
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                        <span>Sign in with Google</span>
                    </button>
                </div>
                <p className="register__p">Already on LinkedIn? <span className="register__join-now"><a href="#" onClick={() => navigate('/')}>Sign in</a></span></p>
            </div>
        </div>
    )
}



