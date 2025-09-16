import { useState } from 'react'
import Counter from './Counter'
import Todolist from './Todolist'
import { MyContext } from './MyContext'
import Parent from './parent'

function App() {

  return (
    <div className='border border-2 border-danger m-3 p-3'>
      {/* <Counter></Counter>
      <Todolist></Todolist> */}
      <MyContext.Provider value={{myname:"Umasri",age:21}}>
      <h1>UseReducer And UseContext App:</h1>
        <Parent></Parent>
      </MyContext.Provider>
    </div>
  )
}

export default App
