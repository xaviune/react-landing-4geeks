import React from "react";

//create your first component
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <a className="navbar-brand" href="#">Start bootstrap</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item active ml-auto p-2">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item ml-auto p-2">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item ml-auto p-2">
        <a className="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>
	);
};

export default Navbar;
