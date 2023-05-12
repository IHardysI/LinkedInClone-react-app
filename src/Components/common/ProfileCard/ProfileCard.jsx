import React, { useState } from "react";
import './ProfileCard.scss'
import testImg from '../../../assets/profile.jpg'
import testBack from '../../../assets/endBack-v1.png'

export default function ProfileCard({ currentUser, handleEdit }) {

    

    return (
        <div className="profileCard">
            <div className="profileCard__container">
                <div className="profileCard__content">
                    <div className="profileCard__info">
                        <div className="profileCard__img-edit-block">
                            <img src={testBack} alt="" className="profileCard__back" />
                            <div className="profileCard__userImg-edit-block">
                                <img src={testImg} alt="img" className="profileCard__userImg" />
                                <div className="profileCard__edit">
                                    <button className="profileCard__edit-btn" onClick={handleEdit}>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className="profileCard__downBlock">
                            <div className="profileCard__user-line-college">
                                <div className="profileCard__user-line">
                                    <p className="profileCard__user">
                                        {currentUser.user}
                                    </p>
                                    <p className="profileCard__title">
                                        {currentUser.headline}
                                    </p>
                                </div>
                                <p className="profileCard__college">
                                    {currentUser.college}
                                </p>
                            </div>
                            <p className="profileCard__location">
                                {currentUser.location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}