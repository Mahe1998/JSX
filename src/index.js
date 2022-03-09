import React from "react";
import ReactDOM from "react-dom";

// const fname = "Mahesh";
// const lname = "S";
// const currentDate = new Date();
//console.log(currentDate);

/* ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <h3>I am 24 years old.</h3>
    <p>The random number generated is {Math.round(Math.random() * 10)}.</p>
    <p>Created by {fname + " " + lname}.</p>
    <p>Copyright {currentDate.getFullYear()}</p>
  </div>,
  document.getElementById("root")
); */

/* ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Foods</h1>
    <ul>
      <li>prawn</li>
      <li>Chicken</li>
      <li>Fish</li>
      <li>Egg</li>
      <li>Crab</li>
    </ul>
  </div>,
  document.getElementById("root")
); */

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Foods</h1>
    <div>
      <img
        src={img + "?grayscale"}
        alt="Random pics from Picsum in grayscale."
      />
      <img
        className="food-img"
        src="https://simmertoslimmer.com/wp-content/uploads/2018/01/South-Indian-chicken-biryani.jpg"
        alt="Pic of Chicken Biryani"
      />
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJNQKpUo-2Q2iZstty0cI4sJiNDB_FBDQ6Q&usqp=CAU"
        alt="Pic of Egg Biryani"
      />
    </div>
  </div>,
  document.getElementById("root")
);

/* const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Foods</h1>
    <div>
      <img
        src={img + "?grayscale"}
        alt="Random pics from Picsum in grayscale."
      />
    </div>
  </div>,
  document.getElementById("root")
); */
