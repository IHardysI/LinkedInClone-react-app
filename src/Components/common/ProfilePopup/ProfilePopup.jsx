import React, { useEffect } from 'react'
import './ProfilePopup.scss'
import { onLogout } from '../../../api/AuthAPI'
import defaultUserImage from '../../../assets/user-icon.svg'

export default function ProfilePopup({ goToRoute, currentUser }) {
    

    return (
        <div className='popup__card'>
            <div className="popup__profile-block">
                <div className="popup__profile-img-block">
                    <img src={currentUser.imageLink ? currentUser.imageLink : defaultUserImage} alt="img" className="popup__img" onClick={() => goToRoute('/profile')} />
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
