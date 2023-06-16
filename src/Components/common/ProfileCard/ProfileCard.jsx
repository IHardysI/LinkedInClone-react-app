import React, { useState, useMemo, useEffect } from "react";
import "./ProfileCard.scss";
import PostsCard from "../PostsCard/PostsCard";
import { postStatus, getStatus, editProfile } from "../../../api/StoreAPI";
import { getSingleStatus, getSingleUser, updatePost } from "../../../api/StoreAPI";
import { useLocation } from "react-router-dom";
import { uploadImage as uploadImageAPI } from "../../../api/ImageUpload";
import FileUploadModal from "../FileUploadModal/FileUploadModal";
import { uploadBack as uploadBackAPI } from "../../../api/ImageUpload";
import BackUploadModal from "../BackUploadModal/BackUploadModal";
import defaultUserIcon from '../../../assets/user-icon.svg'
import defaultBack from '../../../assets/defaultBack.svg'
import ModalComponent from "../Modal/Modal";



export default function ProfileCard({ currentUser, handleEdit, goToRoute }) {
    let location = useLocation();
    const [allStatuses, setAllStatuses] = useState([]);
    const [currentProfile, setCurrentProfile] = useState({});
    const [currentUserImage, setCurrentUserImage] = useState({});
    const [currentBackImage, setCurrentBackImage] = useState({});
    const [modalOpen, setModalOpen] = useState(false)
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [uploadProgressUser, setUploadProgressUser] = useState(0)
    const [uploadProgressBack, setUploadProgressBack] = useState(0)
    const [status, setStatus] = useState('')
    const [currentPost, setCurrentPost] = useState({})
    const [isEdit, setIsEdit] = useState(false)


    const getImage = (event) => {
        setCurrentUserImage(event.target.files[0]);
    };
    const getBack = (event) => {
        setCurrentBackImage(event.target.files[0]);
    };

    const uploadPic = () => {
        uploadImageAPI(currentUserImage, currentUser.id, setModal1Open, setUploadProgressUser, setCurrentUserImage);
    };

    const uploadBack = () => {
        uploadBackAPI(currentBackImage, currentUser.id, setModal2Open, setUploadProgressBack, setCurrentBackImage);
    };

    useMemo(() => {
        if (location?.state?.id) {
            getSingleStatus(setAllStatuses, location?.state?.id);
        } else {
            getStatus(setAllStatuses);
        }

        if (location?.state?.email) {
            getSingleUser(setCurrentProfile, location?.state?.email);
        }
    }, []);

    const getEditData = (posts) => {
        setModalOpen(true)
        setStatus(posts?.status);
        setCurrentPost(posts)
        setIsEdit(true)
    }

    const updateStatus = () => {
        console.log(status);
        updatePost(currentPost.id, status)
        setModalOpen(false)
    }

    let statuses;
    if (Object.values(currentProfile).length === 0) {
        statuses = (
            <>
                {allStatuses
                    .filter((item) => {
                        return item.userEmail === currentUser.email;
                    })
                    .sort((a, b) => {
                        const timeStampA = new Date(a.timeStamp);
                        const timeStampB = new Date(b.timeStamp);
                        return timeStampB - timeStampA;
                    })
                    .map((posts) => {
                        return (
                            <PostsCard
                                posts={posts}
                                key={posts.postID}
                                currentUser={currentUser}
                                getEditData={getEditData}
                            />
                        );
                    })}
            </>
        );
    } else {
        statuses = (
            <>
                {allStatuses
                    .sort((a, b) => {
                        const timeStampA = new Date(a.timeStamp);
                        const timeStampB = new Date(b.timeStamp);
                        return timeStampB - timeStampA;
                    })
                    .map((posts) => {
                        return (
                            <PostsCard
                                posts={posts}
                                key={posts.postID}
                                currentUser={currentUser}
                                getEditData={getEditData}
                            />
                        );
                    })}
            </>
        );
    }

    let userEditIf;
    if (currentProfile.userID == currentUser.userID) {
        userEditIf = (
            <div className="profileCard__edit" onClick={handleEdit}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="gray"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                >
                    <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                </svg>
            </div>
        );
    } else if (Object.values(currentProfile).length === 0) {
        userEditIf = (
            <div className="profileCard__edit" onClick={handleEdit}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="gray"
                    class="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                >
                    <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                </svg>
            </div>
        );
    } else {
        userEditIf = <></>;
    }

    let userBackIf;
    if (currentProfile.userID == currentUser.userID) {
        userBackIf = (
            <button
                className="profileCard__edit-back"
                onClick={() => setModal2Open(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="gray"
                    class="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                >
                    <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                </svg>
            </button>
        );
    } else if (Object.values(currentProfile).length === 0) {
        userBackIf = (
            <button
                className="profileCard__edit-back"
                onClick={() => setModal2Open(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="gray"
                    class="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                >
                    <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                </svg>
            </button>
        );
    } else {
        userBackIf = <></>;
    }

    console.log(currentUser);
    console.log(currentProfile);

    let userBack
    if (Object.values(currentProfile).length === 0 && currentUser.BackLink){
        userBack = currentUser.BackLink
    } else if (Object.values(currentProfile).length > 0 && currentProfile.BackLink) {
        userBack = currentProfile.BackLink
    } else {
        userBack = defaultBack
    }

    let userIcon 
    if (Object.values(currentProfile).length === 0 && currentUser.imageLink){
        userIcon = currentUser.imageLink
    } else if (Object.values(currentProfile).length > 0 && currentProfile.imageLink) {
        userIcon = currentProfile.imageLink
    } else {
        userIcon = defaultUserIcon
    }

    let imageUploadIf 
    if (Object.values(currentProfile).length === 0 || currentProfile.email === currentUser.email) {
        imageUploadIf = () => setModal1Open(true)
    } else {
        imageUploadIf = () => setModal1Open(false)
    }

    return (
        <div className="profileCard">
            <ModalComponent
                modalOpen={modalOpen} 
                setModalOpen={setModalOpen} 
                setStatus={setStatus} 
                status={status} 
                isEdit={isEdit} 
                updateStatus={updateStatus}
            />
            <FileUploadModal
                modal1Open={modal1Open}
                setModal1Open={setModal1Open}
                getImage={getImage}
                uploadPic={uploadPic}
                currentUserImage={currentUserImage}
                uploadProgressUser={uploadProgressUser}
                setUploadProgressUser={setUploadProgressUser}
            />
            <BackUploadModal
                modal2Open={modal2Open}
                setModal2Open={setModal2Open}
                getBack={getBack}
                uploadBack={uploadBack}
                currentBackImage={currentBackImage}
                uploadProgressBack={uploadProgressBack}
                setUploadProgressBack={setUploadProgressBack}
            />
            <div className="profileCard__container">
                <div className="profileCard__content">
                    <div className="profileCard__info">
                        <div className="profileCard__img-edit-block">
                            <img
                                src={
                                    userBack
                                }
                                alt="back"
                                className="profileCard__back"
                            />
                            {userBackIf}
                            <div className="profileCard__userImg-edit-block">
                                <img
                                    src={
                                        userIcon
                                    }
                                    alt="img"
                                    className="profileCard__userImg"
                                    onClick={imageUploadIf}
                                />
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

                <div className="profileCard__posts">{statuses}</div>
            </div>
        </div>
    );
}
