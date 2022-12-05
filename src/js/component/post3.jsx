import React from "react";
import Button from "react-bootstrap/Button";
function post({item}){
    return(
        <div className="col-3">
        <img className="adjust-photo rounded" src={item.url}></img>
        <div className="border">
            <h3 className="my-2">{item.tittle}</h3>
            <p>{item.text}</p>
        </div>
        <div className=" border border-top-0 rounded non-border-top">
        <Button className="my-3" variant="primary">Found out more!</Button>{' '}
        </div>
        </div>
    );
}
export default post;