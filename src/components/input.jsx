import React, { useState } from 'react';

export default function Input(props) {
  const [inputValues, setInputValues] = useState({
    title: '',
    date: '',
    time: '',
    note: '',
  });

  const handleChange = (id, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleButtonClick = () => {
    const inputsArray = Object.values(inputValues);
    props.handler(inputsArray);
    // Optionally, you can clear the input values after handling them
    setInputValues({
      title: '',
      date: '',
      time: '',
      note: '',
    });
    props.closeHandler();
  };

  return (
    <div className='p-3 justify-around px-2 flex flex-col '>
      <div className='flex justify-between'>
          <h1 className='text-center text-2xl py-3'>Enter Task</h1>
          <button onClick={props.closeHandler}>X</button>
      </div>

      <label htmlFor='title'>Task title</label>
      <input
        id='title'
        type='text'
        placeholder='Enter data here!!'
        className='p-3 focus:outline-none w-[90%] border border-slate-400'
        value={inputValues.title}
        onChange={(e) => handleChange('title', e.target.value)}
      />
      <label htmlFor='date'>Due Date</label>
      <input
        id='date'
        type='date'
        className='p-3 focus:outline-none w-[90%] border border-slate-400'
        value={inputValues.date}
        onChange={(e) => handleChange('date', e.target.value)}
      />
    <label htmlFor='time'>Set Time</label>
      <input
        id='time'
        type='time'
        className='p-3 focus:outline-none w-[90%] border border-slate-400'
        value={inputValues.time}
        onChange={(e) => handleChange('time', e.target.value)}
      />
  
  <label htmlFor='note'>Note</label>
      <input
        id='note'
        type='text'
        placeholder='Enter your note'
        className='p-3 focus:outline-none w-[90%] border border-slate-400'
        value={inputValues.note}
        onChange={(e) => handleChange('note', e.target.value)}
      />
  

      <div
        className='cursor-pointer w-auto mx-auto px-2 h-[50px] bg-[#e74c3c] text-white text-3xl rounded-lg flex justify-center items-center'
        onClick={handleButtonClick}
      >
        submit
      </div>
    </div>
  );
}
