import React, { useMemo, useState } from "react";
import './LikeBtn.scss'
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import { likePost } from "../../../api/StoreAPI";
import { getLikesByUser } from "../../../api/StoreAPI";

export default function LikeBtn({ userID, postID }) {
    const [likesCount, setLikesCount] = useState(0)
    const [liked, setLiked] = useState(false)
    const handleLike = () => {
        likePost(userID, postID)
    }
    useMemo(() => {
        getLikesByUser(userID, postID, setLiked, setLikesCount)
    },[userID, postID])

    return (
        <button className="like" onClick={handleLike}>
            <LikeOutlined style={{ fontSize: '24px', color: 'gray' }} />
            <p>Like</p>
            <span>{likesCount}</span>
        </button>
    )
}