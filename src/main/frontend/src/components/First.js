import React, { Component } from 'react';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import BsCarousel from "./BsCarousel";
class First extends Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign : "center", marginTop:"15px" }}>
                    Welcome to SportItUp
                </h1>
                <br></br>
                <div>
                <BsCarousel />
                </div>
            </div>
        );
    }
}

export default First;