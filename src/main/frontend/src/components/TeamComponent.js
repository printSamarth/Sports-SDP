import React, {Component} from "react"
import {Link} from "react-router-dom"
import TeamService from "../services/TeamService"

class TeamComponent extends Component {
    constructor(props) {

        super(props);
        this.state = {
            teamId: this.props.teamId,
            teamName: this.props.teamName,
            sportName: this.props.sportName,
            members: this.props.members
        }
        this.handleJoin = this.handleJoin.bind(this)
        console.log(this.state)
    }

    async handleJoin() {
        console.log("sssssssssssssssss", this)
        await TeamService.joinTeam(this.state.teamId, sessionStorage.getItem("user_id")).then((res) => {
            console.log("activity_result", res)
            alert("Successfully joined!");
        });
    }


    render() {
        // {const listItems = data.map((this.state.members) => <li key={this.state.members}>{d.name}</li>);}
        return (
            <div className="card col-md-6 offset-md-3" style={{borderRadius: "25px", padding: "20px"}}>
                <div className="card-body">

                    <div className="TeamComponent" href="" style={{width: '30rem'}}>

                        <h3>{this.state.sportName}</h3>
                        <p>Team Id: {this.state.teamId}</p>
                        <p>Sport Name:{this.state.sportName}</p>

                        <p>Team Name:{this.state.teamName} </p>

                        <p>Memebers: </p>
                        {this.state.members.map(function(m, userId){
                            return (<li key={m.userId}>{m.firstName} {m.lastName}</li>)
                            // console.log(m.firstName);
                        })}
                        <Link to={{pathname: '/TeamList', teamId: this.state.teamId}}>
                            <button className="btn btn-primary" onClick={this.handleJoin}>Join Team</button>
                        </Link>

                    </div>

                </div>
            </div>

        )
    }
}

export default TeamComponent;