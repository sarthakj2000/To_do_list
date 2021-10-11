import React,{useState} from 'react'
import { Modal, Button } from 'antd';
import InputForm from './InputForm';
const ModalForm = () => {
  
    const [isModalVisible, setIsModalVisible] = useState(false);
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
            <Button type="primary" onClick={showModal} style={{marginLeft:"60%",marginTop:"5%"}}>
        Create
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <InputForm />
      </Modal>
        </div>
    )
}

export default ModalForm
