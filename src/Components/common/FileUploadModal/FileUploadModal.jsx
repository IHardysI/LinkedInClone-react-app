import React from "react";
import "./FileUploadModal.scss";
import { Modal, Button } from "antd";
import { Progress, Space } from 'antd';

export default function FileUploadModal({
    modal1Open,
    setModal1Open,
    getImage,
    uploadPic,
    currentUserImage,
    uploadProgressUser,
    setUploadProgressUser
}) {
    


    return (
        <Modal
            title="Profile Photo"
            centered
            open={modal1Open}
            onOk={() => setModal1Open(false)}
            onCancel={() => setModal1Open(false)}
            footer={[
                <Button
                    key="submit"
                    type="primary"
                    onClick={uploadPic}
                    disabled={currentUserImage.name ? false : true} 
                    style={!currentUserImage.name ? { color: 'white', backgroundColor: 'gray' } : { color: 'white', backgroundColor: '#0073b1' }}
                >
                    Upload Profile Photo
                </Button>,
            ]}
        >
            <div className="modal__upload-image">
                <div>
                    {uploadProgressUser === 0 ? <></> : <Progress size={35} type="circle" percent={uploadProgressUser} />}
                    <p>{currentUserImage.name}</p>
                </div>
                <label htmlFor="image-upload" className="add__img-btn">
                    Add an Image
                </label>
                <input
                    hidden
                    id="image-upload"
                    type="file"
                    className="profileCard__uploud"
                    onChange={getImage}
                />
            </div>
        </Modal>
    );
}
