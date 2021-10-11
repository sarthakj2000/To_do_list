import React, {useReducer} from 'react'
import FormContext from './formContext';
import FormReducer from './formReducer';
import { ADD_TASK,DELETE_TASK } from '../type';
import { v4 as uuidv4 } from 'uuid';
const FormState = (props) => {
    const initialState={
        tasks:[]
    };
    const [state,dispatch]=useReducer(FormReducer,initialState);
 
    const addTask=(task)=>{

        dispatch({type:ADD_TASK,payload:task})
    }
    const deleteTask=(id)=>{
        dispatch({type:DELETE_TASK,payload:id})
    }
    return (
        <FormContext.Provider
         value={{
             tasks:state.tasks,
             addTask,
             deleteTask
         }}
        >
            {props.children}
        </FormContext.Provider>
    )
}

export default FormState
