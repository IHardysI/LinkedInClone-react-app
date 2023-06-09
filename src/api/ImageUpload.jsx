import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { editProfile } from "./StoreAPI";




export const uploadImage = (file, id) => {
    const profileIconsRef = ref(storage, `userImages/${file.name}`)
    const uploadTask = uploadBytesResumable(profileIconsRef, file)

    uploadTask.on('state_changed', (snapshot) => {
        const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progress);
    }, (error) => {
        console.error(error);
    }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((response) => {
            editProfile(id, { imageLink: response });
        })
        .catch((error) => {
            console.log(error);
        })
    })
}


export const uploadBack = (file, id) => {
    const profileIconsRef = ref(storage, `userBacks/${file.name}`)
    const uploadTask = uploadBytesResumable(profileIconsRef, file)

    uploadTask.on('state_changed', (snapshot) => {
        const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progress);
    }, (error) => {
        console.error(error);
    }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((response) => {
            editProfile(id, { BackLink: response });
        })
        .catch((error) => {
            console.log(error);
        })
    })
}
