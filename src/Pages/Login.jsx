import React, { useEffect, useState } from "react";
import LoginComponent from "../Components/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/common/Loader/Loader";



export default function Login(props) {
    let navigate = useNavigate()
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if(res?.accessToken){
                navigate('/home')
            } else {
                setLoading(false)
            }
        })
    }, [])
    return (
        loading ? <Loader /> : <LoginComponent />
    )
}