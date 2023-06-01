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
                    <div className="popup__name-title">
                        <h2 onClick={() => goToRoute('/profile')} className="popup__user">{currentUser.name}</h2>
                        <h3 className="popup__title" onClick={() => goToRoute('/profile')}>{currentUser.headline}</h3>
                    </div>
                </div>
                <a onClick={() => goToRoute('/profile')} className='popup__profile-btn'>View Profile</a>
            </div>
            <hr className='popup__profile-hr'/>
            <ul className="popup__options">
                <li className="popup__option" onClick={onLogout}>Sign Out</li>
            </ul>
        </div>
    )
}
