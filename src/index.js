import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Version 1 - Pure javascript
// const p1 = React.createElement("p",{id: "first para"}, "how is it going?");

// const li1 = React.createElement("li", null, "first bullet");
// const li2 = React.createElement("li", null, "second bullet");
// const ul = React.createElement("ul", null, [li1, li2]);

// const ul2 = React.createElement("ul", null, [
//   React.createElement("li", null, "some content"), 
//   React.createElement("li", null, "somecontent")
// ]);

// const myDiv = React.createElement("div", null, [p1, ul, ul2]);

//Version 2 - using JSX
// const p1 = <p style={{background: "#ff0000", "fontSize": "14px"}}>hpw is it going?</p>
// const ul = <ul>
//   <li>first</li>
//   <li>second</li>
// </ul>
// const myLabel = <label htmlFor="name">Enter your name</label>
// const myInput = <input type="text" id = "name"></input>

// const myName = "Vinod";
// const greeting = <p>Hello {myName}</p>

// if(myName === "Vinod") {
//   console.log("Hello Vinod")
// }
// else {
//   console.log("You are not Vinod")
// }

// //Ternary statement
// myName === "Vinod" ? console.log("Hello Vinod") : console.log("You are someone else");
// const fullName = myName === "Vinod" ? "Vinod M" : "Unknown";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(ul, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
