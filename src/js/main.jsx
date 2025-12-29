import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.jsx";
import "../styles/index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

let seconds = 0;

setInterval(() => {
	seconds++;
	root.render(<Home seconds={seconds} />);
}, 1000);

setInterval(() => {
	seconds;
	root.render(<Home seconds={seconds} />);
}, 1000);

