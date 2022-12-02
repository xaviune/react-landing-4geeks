import React from "react";
import Button from "react-bootstrap/Button";
function Header(){
    return(
        <div className="header-background mx-2 my-2 position-relative">
            <div className="centered-right">
            <h1 className="my-3">A warm Welcome!</h1>
            <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex dui, malesuada in ex sed, semper aliquet lacus. Vivamus vitae luctus nibh, at sagittis nunc.</p>
            <Button className="my-3" variant="primary">Call to action!</Button>{' '}
            </div>
        </div>
    )
}
export default Header;