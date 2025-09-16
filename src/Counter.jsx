import React, { useReducer } from 'react'
const initialState={
    count:0
}

function reducer(state=initialState,action){
//   if(action.type==="Inc"){
//      return{...state,count:state.count+1}
//   }
//   if(action.type==="Dec"){
//     return{...state,count:state.count-1}
//  }
   switch (action.type) {
    case "Inc":
        return{...state,count:state.count+1};
    case "Dec":
        return{...state,count:state.count-1};
    }
}
function Counter() {
  var[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div className='border border-2 border-info m-2 p-2'>
      <h2>Counter:{state.count}</h2>
      <button onClick={()=>{dispatch({type:"Inc"})}} className='bg-success border-success-subtle text-white'>Increment</button>
      <button onClick={()=>{dispatch({type:"Dec"})}} className='bg-danger border-danger-subtle text-white ms-4'>Decrement</button>

    </div>
  )
}

export default Counter
