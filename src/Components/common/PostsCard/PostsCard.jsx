import React, { useMemo, useState } from "react";
import './PostsCard.scss'
import { useNavigate } from "react-router-dom";
import LikeBtn from "../LikeBtn/LikeBtn";
import { getCurrentUser } from '../../../api/StoreAPI'

export default function PostsCard({ posts, currentUser }) {
    let navigate = useNavigate()
    const [likesNumb, setLikesNumb] = useState()

    const passLikeNumb = (numb) => {
        setLikesNumb(numb)
    }
    
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
            {likesNumb !== 0
                ?
                    <div className="postsCard__likes" >
                        <img class="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light" src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="like" data-test-reactions-icon-type="LIKE" data-test-reactions-icon-theme="light"></img>
                        <span className="postsCard__likes-num">{likesNumb}</span>
                    </div>
                : 
                    <div className="postsCard__likes" >
                        
                    </div>
            }
            <hr className="postsCard__hr" />
            <LikeBtn passLikeNumb={passLikeNumb}  userID={currentUser?.id} postID={posts?.id}/>
        </div>
    )
}