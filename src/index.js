import React from "react";
import ReactDOM from "react-dom";

const fname = "Mahesh";
const lname = "S";
const currentDate = new Date();
//console.log(currentDate);

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <h3>I am 24 years old.</h3>
    <p>The random number generated is {Math.round(Math.random() * 10)}.</p>
    <p>Created by {fname + " " + lname}.</p>
    <p>Copyright {currentDate.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
