import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/common/Loader/Loader";
import ConnectionsComponent from "../Components/ConnectionsComponent";

export default function Connections({ currentUser }) {
    let [loading, setLoading] = useState(true);
    let navigate = useNavigate()
    const goToRoute = (route) => {
        navigate(route)
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if(!res?.accessToken){
                goToRoute('/')
            } else {
                setLoading(false)
            }
        })
    }, [])
    
    return (
        loading ? <Loader /> : <ConnectionsComponent currentUser={currentUser} goToRoute={goToRoute} />
    )
}