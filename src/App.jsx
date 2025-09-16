import { useState } from 'react'
import Counter from './Counter'
import Todolist from './Todolist'


function App() {

  return (
    <div className='border border-2 border-danger m-3 p-3'>
      <h1>UseReducer And UseContext App:</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  )
}

export default App
