import React,{useState,useContext} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { List, Modal } from 'antd';
import ModalForm from './ModalForm'
import FormContext from './context/forms/formContext'
import {DeleteOutlined } from '@ant-design/icons';
import ModalDetails from './ModalDetails';
const AddTask = (props) => {
  const formContext=useContext(FormContext);
  const {tasks:data,deleteTask}=formContext
  // const [data,setData]=useState({
  //   title:"",
  //   detail:""
  // });
  const [isModalVisible, setIsModalVisible] = useState(false);

   const onClickHandler=()=>{
    console.log("hello")
   }
  return(
    <div>
      <ModalForm />
      
    <div className="taskMarginleft">
            
            <List
            
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item className="textWhite">
        <List.Item.Meta
          title={item.title}
          description={item.detail}
          onClick={onClickHandler}
        />
     <ModalDetails title={item.title} detail={item.detail}/>
      </List.Item>
    )}
  />
      </div>
    </div>
  )
}

export default AddTask;
