import React from "react";

const Question = (props) => {
  const style = {
    border: "4px solid white",
    textAlign: "center",
    margin: "50px",
    color: "white",
  };
  return (
    <div onClick={props.click} style={style}>
      <p>{props.question}</p>
    </div>
  );
};

export default Question;
