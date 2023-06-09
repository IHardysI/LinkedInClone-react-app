import React from 'react'
import './BackUploadModal.scss'
import { Modal, Button } from 'antd'

export default function BackUploadModal({modal2Open, setModal2Open, getBack, uploadBack}) {
    return(
        <Modal
        title="Background Photo"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={[
                <Button style={{backgroundColor: '#0073b1'}} key="submit" type="primary" onClick={uploadBack}>
                    Upload Profile Background
                </Button>
            ]}
        >
        <div className='modal__upload-image'>
            <label htmlFor='image-upload' className='add__img-btn'>
                Add an Image
            </label>
            <input hidden id='image-upload' type="file" className="profileCard__upload" onChange={getBack} />
        </div>
        </Modal>
    )
}