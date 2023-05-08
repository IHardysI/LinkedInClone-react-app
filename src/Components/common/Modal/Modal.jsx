import { useState } from 'react';
import { Modal, Button } from 'antd';
import './Modal.scss';



const ModalComponent = ({modalOpen, setModalOpen, setStatus, status, sendStatus}) => {
    const [state, setState] = useState('')

    const handleChange = (e) => {
        setState(e.target.value)
        e.target.style.height = 'auto'
        e.target.style.height = `${e.target.scrollHeight}px`
    }
    
    

    return (
        <>
        <Modal
            title="Create a post"
            centered
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            footer={[
                <Button onClick={sendStatus} key="submit" type="primary" disabled={status.length > 0 ? false : true}>
                    Post
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