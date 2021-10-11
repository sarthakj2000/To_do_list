import React,{useContext,useState} from 'react'
import { Form, Button,Input } from 'antd';
import FormContext from './context/forms/formContext'
const InputForm = () => {
    const formContext=useContext(FormContext);
    const {addTask}=formContext
    const [data,setData]=useState([]);

   const [current,setCurrent]=useState({});


  const [title,setTitle]=useState("");
  const [detail,setDetail]=useState("");
 
  // const {setCurrent}=props;
  const onSubmit=(e)=>{
    e.preventDefault();
   

    const curr={
      
      title:title,
      detail:detail
    }
    setCurrent(curr)
    addTask(current)
  
  }
  const onChangeTitle=(e)=>{
    setTitle(e.target.value)
    // setData({[e.target.name]:e.target.value})
    
  }
  const onChangeDetail=(e)=>{
    setDetail(e.target.value)
  }
    return (
        <div>
            <Form 
      
      style={{width:"50%"}}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onSubmit={onSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        value={title}
        onChange={onChangeTitle}
        rules={[{  message: 'Enter Title' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Task Detail"
        name="detail"
        value={detail}
        onChange={onChangeDetail}
        rules={[{message:"Enter Details"}]}
      >
        <Input/>
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button onClick={onSubmit} type="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
        </div>
    )
}

export default InputForm
