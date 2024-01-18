import React from "react";
import Item from "./Item";

export default function DeletedBox(props) {
  const items = props.data && props.data.length > 0 ? (
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
    <p>No deleted items</p>
    
  );
  console.log("Hello world")
  return <div className=" mx-2 p-3 border border-yellow-900">{items}</div>;
}
