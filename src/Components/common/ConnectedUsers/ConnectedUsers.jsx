import React, { useState, useEffect } from "react";
import './ConnectedUsers.scss'
import defaultBack from '../../../assets/defaultBack.svg'
import defaultUserIcon from '../../../assets/user-icon.svg'
import { getConnections, unfollowConnection } from "../../../api/StoreAPI";
import { useNavigate } from "react-router-dom";

export default function ConnectedUsers({ user, getCurrentUser, currentUser }) {
    const [isConnected, setIsConnected] = useState(false)

    useEffect(() => {
        getConnections(currentUser.id, user.id, setIsConnected)
    }, [currentUser.id, user.id])

    const navigate = useNavigate()

    return (
        isConnected ? 
        <div className="connection-card card">
            <div className="card__text-block">
                <img src={user?.imageLink ? user?.imageLink : defaultUserIcon} alt="user-icon" className="text-block__user-icon" />
                <div className="card__name-headline">
                    <p className="card__username">{user.name}</p>
                    <p className="card__headline">{user.headline}</p>
                </div>
                <button onClick={() => unfollowConnection(currentUser.id, user.id, isConnected)} className="card__button">Unfollow</button>
            </div>
        </div> : <></>
    )
}


