import React from 'react'
import './FileUploadModal.scss'
import { Modal, Button } from 'antd'

export default function FileUploadModal({modal1Open, setModal1Open, getImage, uploadPic}) {
    return(
        <Modal
        title="Profile Photo"
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        footer={[
                <Button style={{backgroundColor: '#0073b1'}} key="submit" type="primary" onClick={uploadPic}>
                    Upload Profile Photo
                </Button>
            ]}
        >
        <div className='modal__upload-image'>
            <label htmlFor='image-upload' className='add__img-btn'>
                Add an Image
            </label>
            <input hidden id='image-upload' type="file" className="profileCard__uploud" onChange={getImage} />
        </div>
        </Modal>
    )
}