import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.logoutHandler = this.logoutHandler.bind(this);
    }

     logoutHandler= async (event) => {
        sessionStorage.removeItem("user_id");
        // this.props.history.push('/');
        window.localStorage.clear();
        window.location.href = '/userSignInComponent';
        // await this.props.history.push('/userSignInComponent');
        console.log(sessionStorage.getItem('user_id'));
    }
    render() {
        const loggedIn = sessionStorage.getItem('user_id');
        const adminFlag = this.props.adminFlag;
        console.log("Headder component",loggedIn);
        console.log(this.props.isloggedIn)
        console.log(this.props.adminFlag)
        if(loggedIn && !this.props.adminFlag){
            return (
                <div>
                    <header>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
                            {/* <div><a href="" className="navbar-brand">SportItUp</a></div> */}

                            <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
                                <a className="navbar-brand" href="">Sport It Up</a>
                                <img src="https://cdn.imgbin.com/8/10/4/imgbin-american-football-computer-icons-sport-ball-RYFV5vhZY4NW6XuvSHWGLF9km.jpg" style={{maxWidth:"5%"}}/>
                                <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
                                    <li className="nav-item" >
                                        <Link to="/Welcome">
                                            <a className="nav-link " aria-current="page" href="">Home</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/VenueList">
                                            <a className="nav-link " href="" tabindex="-1" aria-disabled="true">Venues</a>
                                        </Link>
                                    </li>


                                    <li className="nav-item">
                                        <Link to="/AddActivity">
                                            <a className="nav-link " href="" tabindex="-1" aria-disabled="true">Create Activity</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/ActivityList">
                                            <a className="nav-link " href="" tabindex="-1" aria-disabled="true">Activity List</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/CreateTournament">
                                            <a className="nav-link " href="" tabindex="-1" aria-disabled="true">Create Tournament</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/TournamentList">
                                            <a className="nav-link " href="" tabindex="-1" aria-disabled="true">View Tournament</a>
                                        </Link>
                                    </li>

                                    {/* <li className="nav-item">
          <a className="nav-link " href="" tabindex="-1" aria-disabled="true">Events</a>
        </li> */}

                                    <li className="nav-item">
                                        <Link to="/BookingList">
                                            <a className="nav-link " href="" tabindex="-1"  aria-disabled="true">Bookings</a>
                                        </Link>
                                    </li>
                                </ul>


                                <li className="nav-item">
                                    <Link to={"/userSignInComponent"}>
                                        <a className="nav-link " href="" tabindex="-1" onClick={this.logoutHandler} aria-disabled="true">Logout</a>
                                    </Link>
                                </li>

                            </div>
                        </nav>
                    </header>
                </div>
            )}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        else if(loggedIn && this.props.adminFlag){
            return(
                <div>
                    <header>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
                            {/* <div><a href="" className="navbar-brand">SportItUp</a></div> */}

                            <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
                                <a className="navbar-brand" href="">Sport It mp</a>
                                <img src="https://cdn.imgbin.com/8/10/4/imgbin-american-football-computer-icons-sport-ball-RYFV5vhZY4NW6XuvSHWGLF9km.jpg" style={{maxWidth:"5%"}}/>
                                <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
                                    <li className="nav-item" >
                                        <Link to="/NewVenue">
                                            <a className="nav-link " aria-current="page" href="">Add new Venue</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/NewEvent">
                                            <a className="nav-link " href="" tabindex="-1" aria-disabled="true">Add new Events</a>
                                        </Link >
                                    </li>
                                </ul>
                                <li className="nav-item">
                                    <a className="nav-link " href="" tabindex="-1" aria-disabled="true">Logout</a>
                                </li>

                            </div>


                        </nav>
                    </header>
                </div>

            )

        }
        else{
            return (
                <div>
                    <header>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
                            {/* <div><a href="" className="navbar-brand">SportItUp</a></div> */}

                            <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
                                <a className="navbar-brand" href="">Sport It Up</a>
                                <img src="https://cdn.imgbin.com/8/10/4/imgbin-american-football-computer-icons-sport-ball-RYFV5vhZY4NW6XuvSHWGLF9km.jpg" style={{maxWidth:"5%"}}/>
                                <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
                                    <li className="nav-item" >
                                        <Link to="/">
                                            <a className="nav-link " aria-current="page" href="">Home</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/userRegisterComponent">
                                            <a className="nav-link " href="">Register</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/userSignInComponent">
                                            <a className="nav-link " href="" tabindex="-1" aria-disabled="true">Sign In</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>
            )
        }
    }
}

export default HeaderComponent
