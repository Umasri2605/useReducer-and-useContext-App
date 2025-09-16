import React from 'react'
import MiniGrandChild from './MiniGrandChild'

function GrandChild() {
  return (
    <div className='border border-2 border-warning m-2 p-2'>
       <h2>GrandChild:</h2> 
       <MiniGrandChild></MiniGrandChild>
    </div>
  )
}

export default GrandChild
