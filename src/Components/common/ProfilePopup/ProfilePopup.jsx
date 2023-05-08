import React from 'react'
import './ProfilePopup.scss'
import { onLogout } from '../../../api/AuthAPI'


export default function ProfilePopup({ goToRoute }) {

    return (
        <div className='popup__card'>
            <ul className="popup__options">
                <li className="popup__option" onClick={() => goToRoute('/profile')}>View Profile</li>
                <li className="popup__option" onClick={onLogout}>Logout</li>
            </ul>
        </div>
    )
}
