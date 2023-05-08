import React from "react";
import './ProfileCard.scss'

export default function ProfileCard({ currentUser }) {
    return (
        <div className="profileCard">
            <div className="profileCard__container">
                <div className="profileCard__content">
                    <p style={{fontSize: '1rem', fontWeight:'600'}}>
                        {currentUser.user}
                    </p>
                </div>
            </div>
        </div>
    )
}