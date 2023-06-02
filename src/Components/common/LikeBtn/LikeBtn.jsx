import React, { useMemo, useState } from "react";
import './LikeBtn.scss'
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import { likePost } from "../../../api/StoreAPI";
import { getLikesByUser } from "../../../api/StoreAPI";

export default function LikeBtn({ userID, postID, passLikeNumb }) {
    const [likesCount, setLikesCount] = useState(0)
    const [liked, setLiked] = useState(false)
    const handleLike = () => {
        likePost(userID, postID, liked)
    }
    useMemo(() => {
        getLikesByUser(userID, postID, setLiked, setLikesCount)
    },[userID, postID])

    passLikeNumb(likesCount)

    return (
        <button className="like" onClick={handleLike}>
            {liked ? <LikeFilled style={{ fontSize: '24px', color: '#0073b1' }} /> : <LikeOutlined style={{ fontSize: '24px', color: 'gray' }} />}
            {liked ? <p style={{color: '#0073b1' }} >Like</p> : <p>Like</p>}
        </button>
    )
}