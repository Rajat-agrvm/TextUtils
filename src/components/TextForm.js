import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let uppercase = text.toUpperCase();
    setText(uppercase);
    props.showAlert("Converted to upper case","success");
  };
  const handleLoClick = () => {
    let uppercase = text.toLowerCase();
    setText(uppercase);
    props.showAlert("Converted to lower case","success");
  };
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode === 'dark'?'grey':'white' , color:props.mode === 'dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className={`btn ${props.theme==='green'?"btn-success":"btn-primary"} mx-1`} onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className={`btn ${props.theme==='green'?"btn-success":"btn-primary"} mx-1`} onClick={handleLoClick}>
        Convert to lowercase
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>Your text summary</h1>
     <p> Your text has {text.trim().split(" ").length} words and {text.length} characters</p>
     <p>{0.008 * text.trim().split(" ").length} minutes read</p>
     <h2>Preview</h2>
     <p>{text}</p>
    </div>
    </>
  );
}
