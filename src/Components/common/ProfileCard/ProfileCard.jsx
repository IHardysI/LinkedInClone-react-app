import React, {useState, useMemo} from "react";
import './ProfileCard.scss'
import testImg from '../../../assets/profile.jpg'
import testBack from '../../../assets/endBack-v1.png'
import PostsCard from "../PostsCard/PostsCard";
import { postStatus, getStatus } from "../../../api/StoreAPI";
import { getSingleStatus, getSingleUser } from "../../../api/StoreAPI";
import { useLocation } from "react-router-dom";



export default function ProfileCard({ currentUser, handleEdit, goToRoute }) {
    const [allStatuses, setAllStatuses] = useState([])
    const [currentProfile, setCurrentProfile] = useState({})
    let location = useLocation()

    useMemo(() => {
        if (location?.state?.id) {
            getSingleStatus(setAllStatuses, location?.state?.id)
        } else {
            getStatus(setAllStatuses)
        }

        if (location?.state?.email) {
            getSingleUser(setCurrentProfile, location?.state?.email)
        }
    }, [])
    


    let statuses

    if (Object.values(currentProfile).length === 0) {
        statuses = <>
                        {allStatuses
                        .filter((item) => {
                            return item.userEmail === currentUser.email
                        })
                        .map((posts) => {
                            return (
                                <PostsCard posts={posts} key={posts.postID} />
                            )
                        })
                        }
                    </>
    } else {
        statuses = <>
                    {allStatuses
                    .map((posts) => {
                        return (
                            <PostsCard posts={posts} key={posts.postID} />
                        )
                    })}
                </>
    }

    console.log(Object.values(currentProfile).length);
    

    



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
                                <img src={testImg} alt="img" className="profileCard__userImg" onClick={() => {goToRoute('/home')}}  />
                                <div className="profileCard__edit">
                                    <button className="profileCard__edit-btn" onClick={handleEdit}>Edit</button>
                                </div>
                            </div>
                        </div>



                        <div className="profileCard__downBlock">
                            <div className="profileCard__user-line-college">
                                <div className="profileCard__user-line">
                                    <p className="profileCard__user">
                                        {Object.values(currentProfile).length === 0
                                            ? currentUser.user
                                            : currentProfile?.user}
                                    </p>
                                    <p className="profileCard__title">
                                        {Object.values(currentProfile).length === 0
                                            ? currentUser.headline
                                            : currentProfile?.headline}
                                    </p>
                                </div>
                                <div className="profileCard__down-right">
                                    <p className="profileCard__company">
                                        {Object.values(currentProfile).length === 0
                                            ? currentUser.company
                                            : currentProfile?.company}
                                    </p>
                                    <p className="profileCard__college">
                                        {Object.values(currentProfile).length === 0
                                            ? currentUser.college
                                            : currentProfile?.college}
                                    </p>
                                </div>
                            </div>
                            <p className="profileCard__location">
                                {Object.values(currentProfile).length === 0
                                    ? currentUser.location
                                    : currentProfile?.location}
                            </p>
                        </div>



                    </div>

                </div>
                <div className="profileCard__posts">
                    {statuses}
                </div>
            </div>
            
        </div>
    )
}