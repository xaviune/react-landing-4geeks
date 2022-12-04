import React from "react";
import Button from "react-bootstrap/Button";
function post(){
    return(
        <div className="my-5 mx-5">
        <img className="adjust-photo rounded" src="https://picsum.photos/500/325?grayscale"></img>
        <div className="border">
            <h3 className="my-2">Card Tittle</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod quam nisi, et rhoncus nibh sagittis eu. Integer sed metus ut nisl laoreet feugiat quis at massa.</p>
        </div>
        <div className=" border border-top-0 rounded non-border-top">
        <Button className="my-3" variant="primary">Found out more!</Button>{' '}
        </div>
        </div>
    )
}
export default post;