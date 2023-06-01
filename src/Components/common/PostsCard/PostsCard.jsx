import React, { useMemo } from "react";
import './PostsCard.scss'
import { useNavigate } from "react-router-dom";
import LikeBtn from "../LikeBtn/LikeBtn";
import { getCurrentUser } from '../../../api/StoreAPI'

export default function PostsCard({ posts, currentUser }) {
    let navigate = useNavigate()
    
    return (
        <div className="postsCard">
            <div className="postCard__info" >
                <img
                    src="" 
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
                        {posts.userName}
                    </p>
                    <span className="postCard__timeStamp">{posts.timeStamp}</span>
                </div>
            </div>
            <p className="postCard__p">{posts.status}</p>
            <hr className="postsCard__hr" />
            <LikeBtn  userID={currentUser?.id} postID={posts?.id}/>
        </div>
    )
}