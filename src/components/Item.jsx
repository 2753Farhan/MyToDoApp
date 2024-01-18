import React, { useState } from 'react';

export default function Item(props) {
  const [done, setDone] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedValues, setEditedValues] = useState({
    title: props.title,
    date: props.date,
    time: props.time,
    note: props.note,
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Save edited values
    console.log(editedValues)
    props.editHandler(props.id, editedValues);
    setEditing(false);
    setEditedValues({
        title: props.title,
        date: props.date,
        time: props.time,
        note: props.note,
    })
  };
  

  const handleCancelClick = () => {
    // Cancel editing
    setEditing(false);
  };

  const handleInputChange = (id, value) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <div className={`select-none w-full border-b p-3 flex justify-between items-center`}>
      {editing ? (
        <>
          <div>
            <input
              type="text"
              className='p-2 focus:outline-none border border-slate-400'
              value={editedValues.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
            />
            <input
              type="date"
              className='p-2 focus:outline-none border border-slate-400'
              value={editedValues.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
            />
            <input
              type="time"
              className='p-2 focus:outline-none border border-slate-400'
              value={editedValues.time}
              onChange={(e) => handleInputChange('time', e.target.value)}
            />
            <input
              type="text"
              className='p-2 focus:outline-none border border-slate-400'
              value={editedValues.note}
              onChange={(e) => handleInputChange('note', e.target.value)}
            />
          </div>
          <div className='flex items-center'>
            <button className="text-xl px-2 py-1 bg-green-500 text-white rounded" onClick={handleSaveClick}>
              Save
            </button>
            <button className="text-xl px-2 py-1 ml-2 bg-red-500 text-white rounded" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div onClick={() => setDone(!done)}>
            <span className='pr-2 text-[14px] text-white'>{props.title}</span>
            <span className='pr-2 text-[14px] text-white'>{props.date}</span>
            <span className='pr-2 text-[14px] text-white'>{props.time}</span>
            <span className={`${done ? 'line-through' : ''} text-[20px] text-white`}>{props.note}</span>
          </div>
          <div className='flex items-center'>
          {props.editHandler && (
              <div className='cursor-pointer w-[30px] h-[30px] bg-[#3498db] text-white text-2xl rounded-[50%] flex justify-center items-center' onClick={handleEditClick}>
                ✎
              </div>
            )}
            {props.donetodoHandler && (
              <div className='cursor-pointer w-[30px] h-[30px] bg-[#3498db] text-white text-2xl rounded-[50%] flex justify-center items-center' onClick={() => props.donetodoHandler(props.id)}>
                ✓
              </div>
            )}

 
            <div className='cursor-pointer w-[30px] h-[30px] bg-[#e74c3c] text-white text-2xl rounded-[50%] flex justify-center items-center' onClick={() => props.removeHandler(props.id)}>
              -
            </div>
          </div>
        </>
      )}
    </div>
  );
}
