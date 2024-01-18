import React from "react";
import Mainlayout from "../layout/mainlayout";
import DeletedBox from "../components/deletedbox";

export default function Recyclebin(props) {
    console.log(props)
  return (
      <div>
        <DeletedBox data={props.bindata} />
      </div>
  );
}
