import { useState } from 'react';
import { Modal, Button } from 'antd';
import './Modal.scss';



const ModalComponent = ({modalOpen, setModalOpen, setStatus, status, sendStatus, isEdit, updateStatus}) => {
    const [state, setState] = useState('')

    const handleChange = (e) => {
        setState(e.target.value)
        e.target.style.height = 'auto'
        e.target.style.height = `${e.target.scrollHeight}px`
    }
    
    

    return (
        <>
        <Modal
            title={isEdit ? 'Edit post' : "Create a post"}
            centered
            open={modalOpen}
            onOk={() => {
                setModalOpen(false)
                setStatus('')
            }}
            onCancel={() => {
                setModalOpen(false)
                setStatus('')
            }}
            footer={[
                <Button onClick={isEdit ? updateStatus : sendStatus} key="submit" type="primary" disabled={status.length > 0 ? false : true}>
                    {isEdit ? 'Update' : 'Post'}
                </Button>,
                ]}
        >
            <textarea
                onInput={handleChange}
                style={{ height: 'auto', minHeight: '100px' }}
                className='modal__input' 
                type="text" 
                placeholder='What do you want to talk about?'
                onChange={(event) => setStatus(event.target.value)}
                value={status}
                />
        </Modal>
        </>
    );
};
export default ModalComponent;