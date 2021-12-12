import React, {Component} from "react"
import {Link} from "react-router-dom"


class TournamentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tournamentId: this.props.tournamentId,
            sportName: this.props.sportName,
            maxTeam: this.props.maxTeam,
            noTeam: this.props.noTeam,
            venueName: this.props.venueName,
            venueAddress:this.props.venueAddress
            
        }   
    }


    render() {
        return (
            <div className = "card col-md-6 offset-md-3" style={{borderRadius:"25px",padding :"20px"}}>
            <div className="card-body">
            
            <div className="TournamentComponent" href="" style={{width: '30rem'}}>
                
                <h3>{this.state.sportName}</h3>
                <p>Tournament Id: {this.state.tournamentId}</p>
                <p>Sport Name: {this.state.sportName}</p>
                <p>Max Teams: {this.state.maxTeam}</p>
                
                <p>No. of Teams: {this.state.noTeam} </p>
                <p>Venue Name: {this.state.venueName} </p>
                <p>Venue Address: {this.state.venueAddress} </p>
                
                <Link to={{pathname:'/TeamList',tournamentId:this.state.tournamentId }}>
                    <button className="btn btn-primary">Individual Participation</button>
                </Link>

                <Link to={{pathname:'/CreateTeam',tournamentId:this.state.tournamentId, sportName: this.state.sportName }}>
                    <button className="btn btn-primary">Team Participation</button>
                </Link>
            </div>
           
            </div>
            </div>

        )
    }
}

export default TournamentComponent;