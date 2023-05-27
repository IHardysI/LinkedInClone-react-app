import React, { useState } from "react";
import './ProfileEdit.scss'
import { editProfile } from "../../../api/StoreAPI";

export default function ProfileEdit({ handleEdit, currentUser }) {
    const [editInputs, setEditInputs] = useState({})
    const getInput = (e) => {
        let { name, value } = e.target
        let input = { [name]: value }
        setEditInputs({ ...editInputs, ...input });
        }

        const updateProfileData = async () => {
            await editProfile(currentUser?.id, editInputs);
            await handleEdit()
        }

    
    return(
        <div className="profileEdit">
            <div className="profileEdit__container">
                <div className="profileEdit__content">
                    <button className="profileEdit__btn" onClick={handleEdit}>
                        Back
                    </button>
                    <div className="profileEdit__inputs">
                        <label htmlFor="name">Name</label>
                        <input onChange={getInput} type="text" className="profileEdit__name profileEdit__input" name="name" />

                        <label htmlFor="headline">Headline</label>
                        <input onChange={getInput} type="text" className="profileEdit__headline profileEdit__input" name="headline" />

                        <label htmlFor="location">Location</label>
                        <input onChange={getInput} type="text" className="profileEdit__location profileEdit__input" name="location" />

                        <label htmlFor="company">Company</label>
                        <input onChange={getInput} type="text" className="profileEdit__company profileEdit__input" name="company" />

                        <label htmlFor="college">College</label>
                        <input onChange={getInput} type="text" className="profileEdit__college profileEdit__input" name="college" />
                    </div>
                    <div className="profileEdit__save-btn-container">
                        <button onClick={updateProfileData} className="profileEdit__save-btn profileEdit__btn">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}