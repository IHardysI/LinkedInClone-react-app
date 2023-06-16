import React, { useState, useEffect } from "react";
import PostStatus from "./common/NewPost/NewPost";
import '../Sass/ConnectionsComponent.scss'
import { getUsers } from "../api/StoreAPI";
import ConnectedUsers from "./common/ConnectedUsers/ConnectedUsers";
import AddConnect from "./common/AddConnect/AddConnect";
import { addConnection } from "../api/StoreAPI";

export default function ConnectionsComponent({currentUser}) {
    const [allUsers, setAllUsers] = useState([])

    const getCurrentUser = (id) => {
        addConnection(currentUser.id, id)
    }

    useEffect(() => {
        getUsers(setAllUsers)
    }, [])

    



    return (
        <div className="connections__container">
            <div className="connections__connectedUsers">
                <h2 className="connections__title">My connections</h2>
                <div className="block">
                    {allUsers.map((user) => {
                        return currentUser.id !== user.id ? <ConnectedUsers currentUser={currentUser} key={user.id} user={user} getCurrentUser={getCurrentUser} />   :  <></>
                    })}
                </div>
            </div>

            <div className="connections__addConnections">
                <h2 className="connections__title">Add new connections</h2>
                <div className="block">
                    {allUsers.map((user) => {
                        return currentUser.id !== user.id ? <AddConnect currentUser={currentUser} key={user.id} user={user} getCurrentUser={getCurrentUser} />  : <></>
                    })}
                </div>
            </div>
        </div>
    )
}