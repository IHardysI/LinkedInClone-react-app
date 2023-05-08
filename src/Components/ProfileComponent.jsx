import React from "react";
import '../Sass/ProfileComponent.scss'
import ProfileCard from "./common/ProfileCard/ProfileCard";

export default function ProfileComponent({ currentUser }) {
    return (
        <div className='profile-component'>
            <ProfileCard  currentUser={currentUser} />
        </div>
    )
}

