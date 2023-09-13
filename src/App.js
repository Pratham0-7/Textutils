import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //tells if the mode is dark or not
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");

      document.body.style.backgroundColor = "black";
      showalert("Dark Mode has been enabled", "Success", "type");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode has been enabled", "Success", "type");
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5 ">
         {/* <Routes> */}
          {/* <Route exact path="/about" element={ */}
            {/* <About/> */}
          {/* }> */}
          {/* </Route> */}
         {/* <Route exact path="/" element={ */}
            <Text
            mode={mode}
            showalert={showalert}
            heading="Enter your text below"
            head="Your Text Summary"
          />
         {/* }></Route> */}
         {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}
export default App;
