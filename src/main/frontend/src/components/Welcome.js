import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Carousel} from 'react-bootstrap'
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import BsCarousel from "./BsCarousel";
import ic1 from "../images/football-icon.png"



class Welcome extends Component {

    // constructor(props){
    //     super(props)

    //     this.state={
    //         isloggedIn : false
    //     }

//    }

    render() {
        //  console.log(this.props.location.isloggedIn)
        console.log(this.props.isloggedIn)
        return (
            <div>
                <BsCarousel />
                {/* {console.log(this.props.state.loggedIn)}
                {console.log(this.props.state.name)} */}
                <br />
                <br />
                <div class="row">
                    <div class="col-sm-4">
                        <img src={ic1} height="130" width="130"/>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
</svg> */}
                        {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                        <h2>Book a venue</h2>
                        <p>Looking for a place to play !! checkout from our long list of playgrounds and find you favourite</p>
                        <Link to="/VenueList">
                            <a class="btn btn-secondary"  href="" tabindex="-1" aria-disabled="true">See Venues</a>
                        </Link>
                    </div>
                    <div class="col-sm-4">
                        <img src="https://image.flaticon.com/icons/png/512/2158/2158445.png" style={{width:130}}/>
                        {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/></svg> */}
                        <br/>
                        <h2>View Sports Activites</h2>
                        <p>Join the Activity that interests you and meet your Play Buddies.</p>
                        <Link to="/ActivityList">
                            <p><a class="btn btn-secondary" href="#" role="button">Check &raquo;</a></p>
                        </Link>
                    </div>
                    <div class="col-sm-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
                            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <h2>See your History</h2>
                        <p>Check history of your previous bookings</p>
                        <Link to="/BookingList">
                            <a class="btn btn-secondary"  href="" tabindex="-1" aria-disabled="true">Check History</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;