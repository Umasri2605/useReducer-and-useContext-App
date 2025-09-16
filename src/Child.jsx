import React from 'react'
import GrandChild from './GrandChild'

function Child() {
  return (
    <div className='border border-2 border-info m-2 p-2'>
      <h2>Child:</h2>
      <GrandChild></GrandChild>
    </div>
  )
}

export default Child
