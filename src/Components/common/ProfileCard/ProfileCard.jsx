import React, {useState, useMemo, useEffect} from "react";
import './ProfileCard.scss'
import testImg from '../../../assets/profile.jpg'
import testBack from '../../../assets/endBack-v1.png'
import PostsCard from "../PostsCard/PostsCard";
import { postStatus, getStatus, editProfile } from "../../../api/StoreAPI";
import { getSingleStatus, getSingleUser } from "../../../api/StoreAPI";
import { useLocation } from "react-router-dom";
import { uploadImage as uploadImageAPI } from "../../../api/ImageUpload";



export default function ProfileCard({ currentUser, handleEdit, goToRoute }) {
    let location = useLocation()
    const [allStatuses, setAllStatuses] = useState([])
    const [currentProfile, setCurrentProfile] = useState({})
    const [currentUserImage, setCurrentUserImage] = useState({})
    
    const getImage = (event) => {
        setCurrentUserImage(event.target.files[0]);
    }
    
    const uploadPic = () => {
        uploadImageAPI(currentUserImage, currentUser.id)
    }


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
                        .sort((a, b) => {
                            const timeStampA = new Date(a.timeStamp);
                            const timeStampB = new Date(b.timeStamp);
                            return timeStampB - timeStampA;
                        })
                        .map((posts) => {
                            return (
                                <PostsCard posts={posts} key={posts.postID} currentUser={currentUser} />
                            )
                        })
                        }
                    </>
    } else {
        statuses = <>
                    {allStatuses
                    .sort((a, b) => {
                        const timeStampA = new Date(a.timeStamp);
                        const timeStampB = new Date(b.timeStamp);
                        return timeStampB - timeStampA;
                    })
                    .map((posts) => {
                        return (
                            <PostsCard posts={posts} key={posts.postID} currentUser={currentUser} />
                        )
                    })}
                </>
    }


    let userEditIf 
    if(currentProfile.userID == currentUser.userID) {
        userEditIf = <div className="profileCard__edit" onClick={handleEdit}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="gray" class="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                        </svg>
                    </div>
    } else if (Object.values(currentProfile).length === 0) {
        userEditIf = <div className="profileCard__edit" onClick={handleEdit}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="gray" class="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                        </svg>
                    </div>
    } else {
        userEditIf =  <></>
    }

    console.log(currentProfile);


    return (
        <div className="profileCard">
            <div className="profileCard__container">
                <div className="profileCard__content">
                    <div className="profileCard__info">

                        <div className="profileCard__img-edit-block">
                            <input type="file" className="profileCard__uploud" onChange={getImage} />
                            <button onClick={uploadPic}>Upload</button>
                            <img src={testBack} alt="" className="profileCard__back" />
                            <button className="profileCard__edit-back">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="gray" class="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                                </svg>
                            </button>
                            <div className="profileCard__userImg-edit-block">
                                <img src={Object.values(currentProfile).length === 0 ? currentUser?.imageLink : currentProfile?.imageLink}  alt="img" className="profileCard__userImg" onClick={() => {goToRoute('/home')}}  />
                                {userEditIf}
                            </div>
                        </div>



                        <div className="profileCard__downBlock">
                            <div className="profileCard__user-line-college">
                                <div className="profileCard__user-line">
                                    <p className="profileCard__user">
                                        {Object.values(currentProfile).length === 0
                                            ? currentUser?.name
                                            : currentProfile?.name}
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
                <div className="postsCard profileCard__about-skills">
                    <h2 className="profileCard__about-h">About</h2>
                    <p className="profileCard__about-p">
                        {Object.values(currentProfile).length === 0
                            ? currentUser.about
                            : currentProfile?.about}
                    </p>

                    <h2 className="profileCard__skills">Skills</h2>
                    <p className="profileCard__about-p">
                        {Object.values(currentProfile).length === 0
                            ? currentUser.about
                            : currentProfile?.about}
                    </p>
                </div>

                <div className="profileCard__posts">
                    {statuses}
                </div>

            </div>
            
        </div>
    )
}