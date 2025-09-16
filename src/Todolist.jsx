import React, { useReducer,useState } from 'react'
import {alltodos} from "./Todos"
import { v4 as uuidv4 } from 'uuid'

const initialState={
    todos:[...alltodos],
    newState:{title:"",status:false,id:uuidv4()},
};
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case "ADDTODO":
            return{...state,todos:[...state.todos,{...state.newState}]}
    
        case "UPDATENEWTODO":
            return{...state,newState:{...state.newState,title:action.payload}}
    }
}
function Todolist() {
    var [state,dispatch]=useReducer(reducer,initialState);
    // let [newtodo,setNewtodo]=useState({title:"",status:false,id:uuidv4()})
  return (
    <div className='border border-2 border-warning m-2 p-2'>
      <h2>TodoList:</h2>
      <input type="text" onChange={(e)=>{dispatch({type:"UPDATENEWTODO",payload:e.target.value})}}/>
      <button onClick={()=>{dispatch({type:"ADDTODO"})}}>AddTodo</button>
      <ul>
        {
            state.todos.map((todo)=>{
                return<li key={todo.id}>{todo.title}</li>
            })
        }
      </ul>
    </div>
  )
}

export default Todolist
