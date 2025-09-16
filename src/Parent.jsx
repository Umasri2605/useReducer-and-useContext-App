import React, { useContext } from 'react'
import Child from './Child'
import { MyContext } from './MyContext'
function Parent() {
    var x=useContext(MyContext);
    console.log(x);
  return (
    <div className='border border-2 border-success m-2 p-2'>
      <h2>Parent:{x.myname}</h2>
      <Child></Child>
    </div>
  )
}

export default Parent
