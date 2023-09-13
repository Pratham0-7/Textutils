import React, { useState } from "react";

export default function Texts(props) {
  const handleUpClick = () => {
    // console.log("UpperCase Was Clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showalert("Converted to UpperCase", "Success");
  };

  const handleLowClick = () => {
    // console.log("LowerCase Was Clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText);
    props.showalert("Converted to LowerCase", "Success");
  };
  const handleClear = () => {
    let newText = " ";
    setText(newText);
    props.showalert("Text has been cleared", "Success");
  };

  const handleSyllable = () => {
    let text = Text;
    let alpha = 0;
    let element;
    let l = text.length;
    console.log(l);
    for (let i = 0; i < l; i++) {
      element = Text[i];
      if (
        element === "a" ||
        element === "e" ||
        element === "i" ||
        element === "o" ||
        element === "u" ||
        element === "A" ||
        element === "E" ||
        element === "I" ||
        element === "O" ||
        element === "U"
      ) {
        alpha += 1;
        console.log(alpha);
      }

      setText(alpha);
      props.showalert("The check is complete", "Success");
    }
  };

  const handleOnChange = (event) => {
    // console.log("On Change");z
    setText(event.target.value);

    // ye jo value h humari phele se vo + 'Text' kr dega mtlb ye krna padta h taki hum aage type kr paaye
  };

  // handleOnChange function banana padta h taki hum textarea ki default value ko change kr paaye mtlb aage likh paaye

  const [Text, setText] = useState("");

  // usestate ek hook banane me help krta h jisse hum text ki value to change kr sakte h
  // Text ek value h vo user se li h humne & setText Text ko update krne k liye function h

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            id="myBox"
            value={Text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }} // two curly brackets for objects
            placeholder="Enter Your Text Here"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          UpperCase
        </button>

        <button
          type="button"
          className="btn btn-outline-primary mx-2 my-2"
          onClick={handleLowClick}
        >
          LowerCase
        </button>

        <button
          type="button"
          className="btn btn-outline-primary mx-2 my-2"
          onClick={handleClear}
        >
          Clear Text
        </button>

        <button
          type="button"
          className="btn btn-outline-primary mx-2 my-2"
          onClick={handleSyllable}
        >
          Check syllable
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.head}</h1>
        <p>
          {String(Text).split("").length} words and {Text.length} characters
        </p>
      </div>
    </>
  );
}
