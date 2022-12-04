import React from "react";
import Navbar from "./Navbar.jsx";
import Header from "./header.jsx";
import Cards from "./cards.json";
import Post from "./post3.jsx";
import Footer from "./footer.jsx";
import Postcreator from "./postcreator.jsx";



function Home(){
return(
    <div>
    <div><Navbar /></div>
    <div class="container">
        <div><Header /></div>
        <div className="container text-center my-4">
            <div className="row">
                <Postcreator />
            </div>
        </div>
    </div>
    <div className="px-3 py-3"><Footer /></div>
    </div>
);
}
export default Home;