import React from "react";
import cards from "./cards.json";
import Post from "./post3.jsx";

function Postcreator(){
    const list = cards.map((item) =>{
        return <Post item = {item} />;
    });
    return (
        <div className="d-flex">
        {list}
        </div>
    );
}
export default Postcreator;