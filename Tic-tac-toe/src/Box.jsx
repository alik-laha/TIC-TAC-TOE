import React from "react";

let Box = (props) => {
  return (
    <>
      <div className="box" onClick={props.onclick}>
        <h1>{props.value}</h1>
      </div>
    </>
  );
};
export default Box;
