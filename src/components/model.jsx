import React from 'react'
import Input from './input';

export default function Model({visible,onClose,handler}) {
    const handleOnClose = (e) =>{
        if(e.target.id === 'container') 
        onClose();
    }

    if(!visible)return null;
  return (
    <div 
    id='container'
    onClick={handleOnClose} 
    className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-white p-2 rounded'>
        <Input handler={handler} closeHandler={onClose}/>
      </div>
    </div>
  )
}
