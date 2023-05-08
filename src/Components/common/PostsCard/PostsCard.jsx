import React from "react";
import './PostsCard.scss'

export default function PostsCard({posts}) {
    return (
        <div className="postsCard">
            <div className="postCard__info">
                <img src="" alt="" className="postCard__img" />
                <div className="postCard__info-text">
                    <p className="postCard__user">{posts.userName}</p>
                    <span className="postCard__timeStamp">{posts.timeStamp}</span>
                </div>
            </div>
            <p className="postCard__p">{posts.status}</p>
        </div>
    )
}