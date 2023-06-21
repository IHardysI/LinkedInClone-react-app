import React, { useEffect, useState } from "react";
import './AddConnect.scss'
import defaultBack from '../../../assets/defaultBack.svg'
import defaultUserIcon from '../../../assets/user-icon.svg'
import { getConnections } from "../../../api/StoreAPI";
import { useNavigate } from "react-router-dom";

export default function AddConnect({user, getCurrentUser, currentUser}) {
    const [isConnected, setIsConnected] = useState(false)


    const navigate = useNavigate()

    useEffect(() => {
        getConnections(currentUser.id, user.id, setIsConnected)
    }, [currentUser.id, user.id])
    return (
        !isConnected ? 
        <div className="addConnect-card card">
            <img src={user?.BackLink ? user?.BackLink : defaultBack} alt="wallpaper" className="card__back" />
            <div className="card__text-block">
                <img src={user?.imageLink ? user?.imageLink : defaultUserIcon} alt="user-icon" className="text-block__user-icon" />
                <p className="card__username">{user.name}</p>
                <p className="card__headline">{user.headline}</p>
                <button className="card__button" onClick={() => getCurrentUser(user.id)}>Follow</button>
            </div>
        </div> : <></>
    )
}