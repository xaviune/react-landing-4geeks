//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar2 from "./component/Navbar2.jsx";
import Header from "./component/header.jsx";
import Post from "./component/post.jsx";
import Post2 from "./component/post2.jsx";
import Footer from "./component/footer.jsx";
//render your react application
ReactDOM.render(<Navbar2 />, document.querySelector("#app-navbar"));
ReactDOM.render(<Header />, document.querySelector("#app-header"));
ReactDOM.render(<Post />, document.querySelector("#post1"));
ReactDOM.render(<Post />, document.querySelector("#post2"));
ReactDOM.render(<Post />, document.querySelector("#post3"));
ReactDOM.render(<Post />, document.querySelector("#post4"));
ReactDOM.render(<Footer />, document.querySelector("#app-footer"));
