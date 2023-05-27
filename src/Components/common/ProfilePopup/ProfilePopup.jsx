import React, { useEffect } from 'react'
import './ProfilePopup.scss'
import { onLogout } from '../../../api/AuthAPI'
import profileTestImg from '../../../assets/profile.jpg'

export default function ProfilePopup({ goToRoute, currentUser }) {
    
    // const capitalizedUserName = currentUser.user.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <div className='popup__card'>
            <div className="popup__profile-block">
                <div className="popup__profile-img-block">
                    <img src={profileTestImg} alt="img" className="popup__img" onClick={() => goToRoute('/profile')} />
                    <h2 onClick={() => goToRoute('/profile')} className="popup__user">{currentUser.name}</h2>
                </div>
                <button onClick={() => goToRoute('/profile')} className='popup__logout-btn'>View Profile</button>
            </div>
            <hr className='popup__profile-hr'/>
            <ul className="popup__options">
                <li className="popup__option" onClick={onLogout}>Sign Out</li>
            </ul>
        </div>
    )
}
