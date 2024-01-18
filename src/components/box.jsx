import React from 'react'
import Item from './Item'

export default function Box(props) {  const items = props.data && props.data.length > 0 ? (
    props.data.map((singleData, index) => (
      <Item
        editHandler={props.editHandler}
        donetodoHandler={props.donetodoHandler}
        removeHandler={props.removeHandler}
        key={index}
        id={index}
        title={singleData.title}
        date={singleData.date}
        time={singleData.time}
        note={singleData.note}
      />
    ))
  ) : (
    <p>No tasks</p>
    
  );

    console.log("hello my world")
    return (
        <div className='mx-2 p-3 border border-yellow-800 '>
        {items}
            {/* <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/> */}
        </div>
    )
}