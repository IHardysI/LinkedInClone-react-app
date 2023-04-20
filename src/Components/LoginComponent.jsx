import React, { useState } from "react";
import { LoginAPI, RegisterAPI } from "../api/AuthAPI";
import '../Sass/LoginComponent.scss';
import LinkedinLogo from '../assets/linkedinLogo.png'

export default function LoginComponent(props) {
    const [credentials, setCredentials] = useState({})
    const login = async () => {
        try{
            let res = await LoginAPI(credentials.email, credentials.password)
            console.log(res?.user)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="login">
            <img src={LinkedinLogo} className="linkedinLogo" />
            <div className="login__container">
                <div className="login__box">
                    <h1 className="login__heading">Sign in</h1>
                    <h2 className="login__subheading">Stay updated on your professional world</h2>
                    <form action="" className="login__form form">
                        <input 
                            type="email" 
                            className="form__email" 
                            placeholder="Email or Phone" 
                            onChange={(event) => setCredentials({ ...credentials, email: event.target.value })
                        } />
                        <div className="form__password-div">
                            <input 
                                type="password" 
                                className="form__password" 
                                placeholder="Password" 
                                onChange={(event) => setCredentials({ ...credentials, password: event.target.value })
                            } />
                            <span className="form__show-pas">
                                show
                            </span>
                        </div>
                        <button onClick={login} className="form__btn">
                            Sign in
                        </button>
                    </form>
                    <hr className="login__hr-text" data-content="or"></hr>
                </div>
                <p className="login__p">New to LinkedIn? <span className="login__join-now"><a href="#">Join now</a></span></p>
            </div>
        </div>
    )
}