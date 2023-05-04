import React, {useState, useMemo} from "react";
import './NewPost.scss';
import ModalComponent from "../Modal/Modal";
import { postStatus, getStatus } from "../../../api/StoreAPI";
import PostsCard from "../PostsCard/PostsCard";
import getTime from '../../../helper/GetTimeStamp'

export default function PostStatus() {
    let userEmail = localStorage.getItem('userEmail')
    const [modalOpen, setModalOpen] = useState(false)
    const [status, setStatus] = useState('')
    const [allStatuses, setAllStatuses] = useState([])
    const sendStatus = async () => {
        let object = {
            status: status,
            timeStamp: getTime('LLL'),
            userEmail: userEmail,
        }
        await postStatus(object)
        await setModalOpen(false)
        await setStatus('')
    }

    useMemo(() => {
        getStatus(setAllStatuses)
    }, [])


    return (
        <div className="postStatus">
            <div className="postStatus__container">
                <div className="postStatus__block">
                    <div className="postStatus__share-button">
                        <svg className="postStatus__icon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="gray"><path d="M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z"/></svg>
                        <button onClick={() => setModalOpen(true)} className="postStatus__button">Start a post</button>
                    </div>
                    <div className="postStatus__icons-block">
                        <div className="postStatus__share">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#378fe9" class="postStatus__photo-icon icon" width="24" height="24" focusable="false">
                                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                            </svg>
                            <span className="postStatus__photo-span span">Photo</span>
                        </div>
                        <div className="postStatus__share">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#5f9b41" class="postStatus__video-icon icon" width="24" height="24" focusable="false">
                                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                            </svg>
                            <span className="postStatus__photo-span span">Video</span>
                        </div>
                        <div className="postStatus__share">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#c37d16" class="postStatus__event-icon icon" width="24" height="24" focusable="false">
                                <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                            </svg>
                            <span className="postStatus__photo-span span">Event</span>
                        </div>
                        <div className="postStatus__share">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#e16745" class="postStatus__article-icon icon" width="24" height="24" focusable="false">
                                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                            </svg>
                            <span className="postStatus__photo-span span">Write article</span>
                        </div>
                    </div>
                </div>
            </div>
            <ModalComponent
                modalOpen={modalOpen} setModalOpen={setModalOpen} setStatus={setStatus} status={status} sendStatus={sendStatus}
            />
            <div className="postStatus__posts postStatus__container">
                {allStatuses.map((posts) => {
                    return (
                        <PostsCard posts={posts}/>
                    )
                })}
            </div>
        </div>
    )
}