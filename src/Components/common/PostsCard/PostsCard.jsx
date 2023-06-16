import React, { useMemo, useState, useEffect } from "react";
import './PostsCard.scss'
import { useNavigate } from "react-router-dom";
import LikeBtn from "../LikeBtn/LikeBtn";
import { getCurrentUser, getUsers, deletePost, getConnections } from '../../../api/StoreAPI'
import defaultUserImage from '../../../assets/user-icon.svg'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'


export default function PostsCard({ posts, currentUser, getEditData }) {
    let navigate = useNavigate()
    const [likesNumb, setLikesNumb] = useState()
    const [allUsers, setAllUsers] = useState([])
    const [isConnected, setIsConnected] = useState(false)


    useMemo(() => {
        getUsers(setAllUsers);
    }, [])

    useEffect(() => {
        getConnections(currentUser.id, posts.userID, setIsConnected)
    }, [currentUser.id, posts.userID])


    const passLikeNumb = (numb) => {
        setLikesNumb(numb)
    }

    let headline = allUsers.filter((item) => item.id === posts.userID).map((item) => item?.headline)
    

    return (
        isConnected ? 
        <div className="postsCard">
            <div className="postCard__info" >
                <img
                    src={allUsers.filter((item) => item.id === posts.userID).map((item) => item.imageLink)[0] ? allUsers.filter((item) => item.id === posts.userID).map((item) => item.imageLink)[0] : defaultUserImage} 
                    alt="" 
                    className="postCard__img" 
                    onClick={() => 
                        navigate('/profile', {
                            state: {id: posts?.userID, email: posts.userEmail}
                })}/>
                <div className="postCard__info-text">
                    <p 
                        className="postCard__user" 
                        onClick={() => 
                        navigate('/profile', {
                            state: {id: posts?.userID, email: posts.userEmail}
                            })}
                    >
                        {allUsers.filter((item) => item.id === posts.userID).map((item) => item.name)}
                    </p>
                    {headline[0] === undefined
                    ? <></>
                    : <p className="postCard__headline">{headline}</p>
                    }
                    <span className="postCard__timeStamp">{posts.timeStamp}</span>
                </div>
                {currentUser.id === posts.userID
                ?
                    <div className="postsCard__changes">
                        <div className="postsCard__icon">
                            <EditOutlined 
                            style={{color: 'gray', fontSize: '17px'}}
                            onClick={() => getEditData(posts)}
                            />
                        </div>
                        <div className='postsCard__icon'>
                            <DeleteOutlined
                            style={{color: 'gray', fontSize: '17px'}}
                            onClick={() => deletePost(posts.id)}
                            />
                        </div>
                    </div>
                :
                    <></>
                }
            </div>
            <p className="postCard__p">{posts.status}</p>
            {likesNumb !== 0
                ?
                    <div className="postsCard__likes" >
                        <img className="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light" src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="like" data-test-reactions-icon-type="LIKE" data-test-reactions-icon-theme="light"></img>
                        <span className="postsCard__likes-num">{likesNumb}</span>
                    </div>
                : 
                    <div className="postsCard__likes" >
                        
                    </div>
            }
            <hr className="postsCard__hr" />
            <LikeBtn passLikeNumb={passLikeNumb}  userID={currentUser?.id} postID={posts?.id} currentUser={currentUser}/>
        </div> : (<></>)
    )
}