import { useState } from 'react';
import { Modal, Button } from 'antd';
import './Modal.scss';
import ReactQuill from 'react-quill';



const ModalComponent = ({
    modalOpen, 
    setModalOpen, 
    setStatus, 
    status, 
    sendStatus, 
    isEdit, 
    updateStatus, 
    postImageUpload, 
    setPostImage, 
    postImage, 
    currentPost, 
    setCurrentPost}) => {
    const [state, setState] = useState('')

    const handleChange = (e) => {
        setState(e.target.value)
        e.target.style.height = 'auto'
        e.target.style.height = `${e.target.scrollHeight}px`
    }
    
    
    console.log(postImage);
    return (
        <>
        <Modal
            title={isEdit ? 'Edit post' : "Create a post"}
            centered
            open={modalOpen}
            onOk={() => {
                setModalOpen(false)
                setStatus('')
                setPostImage('')
                setCurrentPost({})
            }}
            onCancel={() => {
                setModalOpen(false)
                setStatus('')
                setPostImage('')
                setCurrentPost({})
            }}
            footer={[
                <Button onClick={isEdit ? updateStatus : sendStatus} key="submit" type="primary" disabled={status.length > 0 || postImage ? false : true}>
                    {isEdit ? 'Update' : 'Post'}
                </Button>,
                ]}
        >

            <ReactQuill placeholder='What do you want to talk about?' className='modal__input' theme="snow" value={status} onChange={setStatus} />

            {postImage?.length > 0 || currentPost?.statusImage ? <img 
                className="modal__image"
                src={postImage || currentPost?.statusImage}
                alt='postImage'
            /> : <></>}

            <label htmlFor="image-upload"><div className="modal__share">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="gray" className="modal__photo-icon icon" width="24" height="24" focusable="false">
                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                </svg>
                <span className="modal__photo-span span">Photo</span>
            </div></label>
            <input type="file" id='image-upload' hidden onChange={(event) => postImageUpload(event.target.files[0], setPostImage)}/>
            
        </Modal>
        </>
    );
};
export default ModalComponent;