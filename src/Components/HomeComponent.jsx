import React from "react";
import '../Sass/HomeComponent.scss'
import PostStatus from "./common/NewPost/NewPost";

export default function HomeComponent({currentUser}) {
    return (
        <div className="homeComponent">
            <PostStatus currentUser={currentUser} />
        </div>
    )
}