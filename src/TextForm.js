import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Upper case was clicked" + text);
    //setText(" You Clicked on handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };
  const handleDelete = () => {
    setText("");
    props.showAlert("Message has been deleted!!!", "danger");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "warning");
  };
  //usestate is for update or reassign, it is a hook change one state to another
  const [text, setText] = useState(""); //text and setText is given by user ,,useState( "Default text" )

  // setText("New Text");
  // console.log(text);
  let myStyle = {
    backgroundColor: props.mode === "dark" ? "grey" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };
  return (
    <>
      {/* whenever you style a js object you have to use double braces */}
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {/* {props.heading} */}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            //  defaultValue="subha nayak"
            value={text}
            onChange={handleOnChange}
            style={myStyle}
          ></textarea>
          <div />
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-4 my-4"
            onClick={handleUpClick}
          >
            To Upper Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-4 my-4"
            onClick={handleLowClick}
          >
            To Lower Case
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-secondary mx-4 my-4"
            onClick={handleDelete}
          >
            Delete Content
          </button>
        </div>

        <div
          className="container my-4"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1>Your Text Summary</h1>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes read
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter the text to get preview"}</p>
        </div>
        {/* <button>Convert</button> */}
      </div>
    </>
  );
}
