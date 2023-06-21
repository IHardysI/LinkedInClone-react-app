import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { editProfile } from "./StoreAPI";




export const uploadImage = (file, id, setModal1Open, setUploadProgressUser, setCurrentUserImage) => {
    const profileIconsRef = ref(storage, `userImages/${file.name}`)
    const uploadTask = uploadBytesResumable(profileIconsRef, file)

    uploadTask.on('state_changed', (snapshot) => {
        const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setUploadProgressUser(progress);
    }, (error) => {
        console.error(error);
    }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((response) => {
            editProfile(id, { imageLink: response });
            setModal1Open(false)
            setCurrentUserImage({})
            setUploadProgressUser(0)
        })
        .catch((error) => {
            console.log(error);
        })
    })
}


export const uploadBack = (file, id, setModal2Open, setUploadProgressBack, setCurrentBackImage) => {
    const profileIconsRef = ref(storage, `backImages/${file.name}`)
    const uploadTask = uploadBytesResumable(profileIconsRef, file)

    uploadTask.on('state_changed', (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        console.log(progress);
        setUploadProgressBack(progress)
    }, (error) => {
        console.error(error);
    }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((response) => {
            editProfile(id, { BackLink: response });
            setModal2Open(false)
            setCurrentBackImage({})
            setUploadProgressBack(0)
        })
        .catch((error) => {
            console.log(error);
        })
    })
}

export const postImageUpload = (file, setPostImage) => {
    const postsPicturesRef = ref(storage, `postImages/${file.name}`)
    const uploadTask = uploadBytesResumable(postsPicturesRef, file)

    uploadTask.on('state_changed', (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        
    }, (error) => {
        console.error(error);
    }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((response) => {
            setPostImage(response)
        })
        .catch((error) => {
            console.log(error);
        })
    })
}
