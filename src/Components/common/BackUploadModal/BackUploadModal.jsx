import React from 'react'
import './BackUploadModal.scss'
import { Modal, Button } from 'antd'
import { Progress, Space } from 'antd';


export default function BackUploadModal({ modal2Open, setModal2Open, getBack, uploadBack, currentBackImage, uploadProgressBack, setUploadProgressBack }) {


    return (
        <Modal
            title="Background Photo"
            centered
            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
            footer={[
                <Button className='backUpload-btn' disabled={currentBackImage.name ? false : true} style={!currentBackImage.name ? { color: 'white', backgroundColor: 'gray' } : { color: 'white', backgroundColor: '#0073b1' }} key="submit" type="primary" onClick={uploadBack}>
                    Upload Profile Background
                </Button>
            ]}
        >
            <div className='modal__upload-image'>
                <div>
                    {uploadProgressBack === 0 ? <></> : <Progress size={35} type="circle" percent={uploadProgressBack} />}
                    <p>{currentBackImage.name}</p>
                </div>
                <label htmlFor='back' className='add__img-btn'>
                    Add an Image
                </label>
                <input hidden placeholder='Add an Image' id='back' type="file" className="profileCard__upload" onChange={getBack} />
            </div>
        </Modal>
    )
}