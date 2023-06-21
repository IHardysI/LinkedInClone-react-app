import React, { useMemo, useState, useEffect } from "react";
import './LikeBtn.scss'
import { LikeOutlined, LikeFilled, CommentOutlined } from "@ant-design/icons";
import { getComments, getCurrentUser, likePost } from "../../../api/StoreAPI";
import { getLikesByUser } from "../../../api/StoreAPI";
import testUser from '../../../assets/profile.jpg'
import { postComment } from "../../../api/StoreAPI";
import GetTimeStamp from "../../../helper/GetTimeStamp";
import {useNavigate } from "react-router-dom";
import { getUsers } from "../../../api/StoreAPI";


export default function LikeBtn({ userID, postID, passLikeNumb, currentUser }) {
    const [likesCount, setLikesCount] = useState(0)
    const [liked, setLiked] = useState(false)
    const [commentBlock, setCommentBlock] = useState(false)
    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState([])
    const [users, setUsers] = useState([])
    const handleLike = () => {
        likePost(userID, postID, liked)
    }
    useMemo(() => {
        getLikesByUser(userID, postID, setLiked, setLikesCount)
        getComments(postID, setAllComments)
    },[userID, postID])

    passLikeNumb(likesCount)

    const getComment = (event) => {
        setComment(event.target.value)
    }

    const addComment = () => {
        comment ? postComment(postID, comment, GetTimeStamp('LLL'), currentUser.name) : console.log('type a comment');
        
        setComment('')
        
    }

    useEffect(() => {
        getUsers(setUsers)
    }, [])



    
    const navigate = useNavigate()



    return (
        <div className="like-comment">
            <div className="like-comment__btns">
                <button className="like" onClick={handleLike}>
                    {liked ? <LikeFilled style={{ fontSize: '24px', color: '#0073b1' }} /> : <LikeOutlined style={{ fontSize: '24px', color: 'gray' }} />}
                    {liked ? <p style={{color: '#0073b1' }} >Like</p> : <p>Like</p>}
                </button>
                <button className="like" onClick={() => setCommentBlock(!commentBlock)} >
                    {!commentBlock ? <CommentOutlined style={{color: 'gray', fontSize: '24px'}} /> : <CommentOutlined style={{color: '#0073b1', fontSize: '24px'}} />}
                    {!commentBlock ? <p>Comment</p> : <p style={{color: '#0073b1' }} >Comment</p>}
                </button>
            </div>
            {commentBlock 
                ?
                    <>
                        <div className="like-comment__input-block">
                            <img src={currentUser.imageLink} alt="user" className="like-comment__img" />
                            <input value={comment} onChange={getComment} name="comment" type="text" className="like-comment__input" placeholder="Add a comment..." />
                            <button onClick={addComment} className="like-comment__btn">Post</button>
                        </div>
                        
                        <div className="like-comment__all-comments">
                            {allComments.length > 0 ? (allComments.map((comment) => {
                                return(
                                    <div className="comment__box" key={comment.id}>
                                        <img src={users.filter((user) => user.name === comment.name)[0].imageLink} alt="user-icon" className="comment__user-icon" />
                                        <div className="comment__texts">
                                            <p className="comment__user ">{comment.name}</p>
                                            <p className="comment__timeStamp">{GetTimeStamp('LLL')}</p>
                                            <p className="comment__comment">{comment.comment}</p>
                                        </div>
                                    </div>
                                )
                            })) : <></>}
                        </div>
                    </>
                : 
                    <></>
            }
        </div>
    )
}