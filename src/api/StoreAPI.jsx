import { firestore } from "../firebaseConfig"
import { addDoc, collection, onSnapshot, doc, updateDoc } from 'firebase/firestore'
import { toast } from "react-toastify"

let postsRef = collection(firestore, 'posts')
let usersRef = collection(firestore, 'users')

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
                    return { ...docs.data(), userID: docs.id }
        })
        .filter((item) => {
            return item.email === localStorage.getItem('userEmail')
        })[0]);
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