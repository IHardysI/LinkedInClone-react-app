import React, { useState } from "react";
import '../Sass/ProfileComponent.scss'
import ProfileCard from "./common/ProfileCard/ProfileCard";
import ProfileEdit from "./common/ProfileEdit/ProfileEdit";
import NewPost from './common/NewPost/NewPost'


export default function ProfileComponent({ currentUser, goToRoute }) {
    const [editState, setEditState] = useState(true)

    const handleEdit = () => {
        setEditState(!editState)
    }
    return (
        <div className='profile-component'>
            {editState
                ?
                    <>
                        <ProfileCard  currentUser={currentUser} handleEdit={handleEdit} goToRoute={goToRoute}/>
                    </>
                : 
                    <ProfileEdit handleEdit={handleEdit} currentUser={currentUser} />}
        </div>
    )
}

