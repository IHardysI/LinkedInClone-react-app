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
                            <button className="profileCard__edit-back">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="gray" class="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                                </svg>
                            </button>
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
                                    <p className="profileCard__user">{currentUser.user}</p>
                                    <p className="profileCard__title">{currentUser.headline}</p>
                                </div>
                                <div className="profileCard__down-right">
                                    <p className="profileCard__company">{currentUser.company}</p>
                                    <p className="profileCard__college">{currentUser.college}</p>
                                </div>
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