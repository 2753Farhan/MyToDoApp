import React from 'react'
import Item from './Item'

export default function Donebox(props) {  const items = props.data && props.data.length > 0 ? (
    props.data.map((singleData, index) => (
      <Item
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
    <p>You have not done anything</p>
    
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