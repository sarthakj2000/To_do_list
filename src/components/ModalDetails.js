import React,{useState} from 'react'
import {Modal,Button} from 'antd'
const ModalDetails = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {title,detail}=props
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    return (
        <div>
            <Button type="primary" onClick={showModal}>
        Show Details
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h1>{title}</h1>
        <p>{detail}</p>
        
      </Modal>
        </div>
    )
}

export default ModalDetails
