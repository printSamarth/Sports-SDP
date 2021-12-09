import React, {Component} from "react"
import {Link} from "react-router-dom"
import TeamService from "../services/TeamService"

class TeamComponent extends Component {

    handleJoin()
     {
        
      TeamService.joinTeam(this.state.teamId,sessionStorage.getItem("user_id")).then((res) =>{
        console.log("activity_result",res)
        
        if(res.data.joinedPlayers!=undefined)
        {
            alert("User with ID:"+sessionStorage.getItem("user_id")+" has joined the activity!"
            +"\n" +"currently joined players:"+res.data.joinedPlayers+ "\n"+"Slots left:"+ (res.data.numberOfPlayers-res.data.joinedPlayers)  )
        }
        else{
            alert("Number of Player limit is reached!");
        }
    });
     }
    constructor(props) {
        super(props);
        this.state = {
            teamId: this.props.teamId,
            captainId: this.props.captainId,
            teamName:this.props.teamName,
            sportName: this.props.sportName,
            members: this.props.members
            
        }   
    }


    render() {
        return (
            <div className = "card col-md-6 offset-md-3" style={{borderRadius:"25px",padding :"20px"}}>
            <div className="card-body">
            
            <div className="TeamComponent" href="" style={{width: '30rem'}}>
                
                <h3>{this.state.sportName}</h3>
                <p>Team Id: {this.state.teamId}</p>
                <p>Sport Name:{this.state.sportName}</p>
                <p>Captain Id:{this.state.captainId}</p>
                
                <p>Team Name:{this.state.teamName} </p>
                <p>Memebers:{this.state.members} </p>
                
                <Link to={{pathname:'/',teamId:this.state.teamId }}>
                    <button className="btn btn-primary">Join Team</button>
                </Link>

            </div>
           
            </div>
            </div>

        )
    }
}

export default TeamComponent;