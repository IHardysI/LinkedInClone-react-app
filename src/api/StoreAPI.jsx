import { firestore } from "../firebaseConfig"
import { addDoc, collection, onSnapshot, doc, updateDoc, query, where, setDoc, deleteDoc } from 'firebase/firestore'
import { toast } from "react-toastify"

let postsRef = collection(firestore, 'posts')
let usersRef = collection(firestore, 'users')
let likeRef = collection(firestore, 'likes')
let commentsRef = collection(firestore, 'comments')

export const postStatus = (object) => {
    addDoc(postsRef, object)
    .then(() => {
        toast.success('The post was successfully uploaded')
    })
    .catch((error) => {
        console.log(error)
    })


}

export const getStatus = (setAllStatuses) => {
    onSnapshot(postsRef, (response) => {
        setAllStatuses(
            response.docs.map((docs) => {
                return {...docs.data(), id: docs.id}
        }));
    })
}

export const getUsers = (setAllUsers) => {
    onSnapshot(usersRef, (response) => {
        setAllUsers(
        response.docs.map((docs) => {
            return { ...docs.data(), id: docs.id }
        })
        )
    })
}

export const getSingleStatus = (setAllStatus, id) => {
    const singlePostQuery = query(postsRef, where("userID", "==", id));
    onSnapshot(singlePostQuery, (response) => {
        setAllStatus(
        response.docs.map((docs) => {
            return { ...docs.data(), id: docs.id };
        })
        );
    });
};

export const getSingleUser = (setCurrentUser, email) => {
    const singleUserQuery = query(usersRef, where("email", "==", email));
    onSnapshot(singleUserQuery, (response) => {
        setCurrentUser(
        response.docs.map((docs) => {
            return { ...docs.data(), id: docs.id };
        })[0]
        );
    });
};

export const postUserData = (object) => {
    addDoc(usersRef, object)
    .then (() => {})
    .catch((err) => {
        console.log(err)
    })
}

export const getCurrentUser = (setCurrentUser) => {
    onSnapshot(usersRef, (response) => {
    setCurrentUser(
        response.docs
        .map((docs) => {
        return { ...docs.data(), id: docs.id };
        })
        .filter((item) => {
        return item.email === localStorage.getItem("userEmail")
        })[0]
    )
    })
}

export const editProfile = (userID, payLoad) => {
    let userToEdit = doc(usersRef, userID)
    updateDoc(userToEdit, payLoad)
    .then(() => {
        toast.success('The Profile was successfully updated')
    })
        .catch((error) => {
            console.log(error);
        })
}

export const likePost = (userID, postID, liked) => {
    try {
        let docToLike = doc(likeRef, `${userID}_${postID}`)
        if(liked) {
            deleteDoc(docToLike)
        } else {
            setDoc(docToLike, {userID, postID})
        }
    } catch(error) {
        console.log(error);
    }
}

export const getLikesByUser = (userID, postID, setLiked, setLikesCount) => {
    try{
        let likeQuery = query(likeRef, where('postID', '==', postID))

        onSnapshot(likeQuery, (response) => {
            let likes = response.docs.map((doc) => doc.data())
            let likesCount = likes.length

            const isLiked = likes.some((like) => like.userID === userID)

            setLikesCount(likesCount)
            setLiked(isLiked)
        })
    } catch(error) {
        console.log(error);
    }
}

export const postComment = (postID, comment, timeStamp, name) => {
    try {
        addDoc(commentsRef, {postID, comment, timeStamp, name})
    } catch(error) {
        console.log(error);
    }
}

export const getComments = (postID, setAllComments) => {
    try {
        let singlePostQuery = query(commentsRef, where('postID', '==', postID))

        onSnapshot(singlePostQuery, (response) => {
            const comments = response.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setAllComments(comments)
        })
    } catch (error) {
        console.log(error);
    }
}


export const updatePost = (id, status) => {
    let postToUpdate = doc(postsRef, id)
    try {
        updateDoc(postToUpdate, { status })
        toast.success('Post was updated')
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => {
    let docToDelete = doc(postsRef, id)
    try {
        deleteDoc(docToDelete)
        toast.success('Post was deleted')
    } catch (error) {
        console.log(error);
    }
}