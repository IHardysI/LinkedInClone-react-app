import React, { useState } from "react";
import './ProfileEdit.scss'
import { editProfile } from "../../../api/StoreAPI";

export default function ProfileEdit({ handleEdit, currentUser }) {
    const [editInputs, setEditInputs] = useState(currentUser)
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
                        <h2 className="profileEdit__basic-info">Basic info</h2>
                        <label htmlFor="name">Name</label>
                        <input onChange={getInput}
                            type="text" 
                            className="profileEdit__name profileEdit__input" 
                            name="name" 
                            value={editInputs.name} 
                        />
                        
                        <label htmlFor="headline">Headline</label>
                        <input 
                            onChange={getInput} 
                            type="text" 
                            className="profileEdit__headline profileEdit__input" 
                            name="headline" 
                            value={editInputs.headline} 
                        />

                        <label htmlFor="about">About</label>
                        <textarea 
                            onChange={getInput} 
                            type="text" 
                            className="profileEdit__about profileEdit__input" 
                            name="about" 
                            value={editInputs.about} 
                            rows={6}
                        />

                        <h2 className="profileEdit__work">Work</h2>
                        <label htmlFor="company">Company</label>
                        <input 
                            onChange={getInput} 
                            type="text" 
                            className="profileEdit__company profileEdit__input" 
                            name="company" 
                            value={editInputs.company} 
                        />

                        <label htmlFor="industry">Industry</label>
                        <input 
                            onChange={getInput} 
                            type="text" 
                            className="profileEdit__company profileEdit__input" 
                            name="industry" 
                            value={editInputs.industry} 
                        />

                        <label htmlFor="skills">Skills</label>
                        <input 
                            onChange={getInput} 
                            type="text" 
                            className="profileEdit__skills profileEdit__input" 
                            name="skills" 
                            value={editInputs.skills} 
                        />

                        <h2 className="profileEdit__study">Study information</h2>
                        <label htmlFor="college">College</label>
                        <input 
                            onChange={getInput} 
                            type="text" 
                            className="profileEdit__college profileEdit__input" 
                            name="college" 
                            value={editInputs.college} 
                        />

                        <h2 className="profileEdit__location">Location</h2>
                        <label htmlFor="location">Country, city</label>
                        <input 
                            onChange={getInput} 
                            type="text" 
                            className="profileEdit__location profileEdit__input" 
                            name="location" 
                            value={editInputs.location} 
                        />
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