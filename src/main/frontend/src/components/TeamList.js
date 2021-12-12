import React, { Component } from 'react';
import TeamComponent from "../components/TeamComponent"

class TeamList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            teamInfo: [],
            tournamentId: this.props.location.tournamentId
            // userId:this.props.location.userId
        }
        this.setStateToFalse = this.setStateToFalse.bind(this)

    }

    setStateToFalse() {
        this.state({
            isLoading: false
        })
    }

    async componentDidMount() {
        if(sessionStorage.getItem("user_id"))
        {
            let response = await fetch('http://localhost:8081/api/tournament/'+this.state.tournamentId, {
                method: 'GET',
                headers: {
                    'Accept': '*/*'
                }
            })
            let status = response.status;
            if (status === 200) {
                console.log("successful")
            }

            let tempTeamInfo = await response.json()
            console.log(tempTeamInfo)
            // if (this.state.userId === undefined) {
            //     this.setState({
            //         userId: JSON.parse(localStorage.getItem('userId')),
            //     })
            // } else {
            //     console.log("hi")
            //     localStorage.setItem('userId', JSON.stringify(this.state.userId));
            // }

            this.setState({
                    teamInfo: tempTeamInfo.teams,
                    isLoading: false
                }
            )
        }
                                      //update appropriate api url(get all team list for particular tournament api)
        else
        {
                this.props.history.push('/');
        }
    }

    render() {
        
            if (this.state.isLoading)
            return (
                <div>
                    <h3>loading...</h3>
                </div>
            )
        const teamComponents = this.state.teamInfo.map((team) => {
        
         console.log("TEams ", team);
         //console.log("Teams[0]", teams[0]);
         console.log("Tournament", this.state.tournamentId);
         var teamId = '';
         var sportName = '';
         var teamName = '';
         var members = '';
        //  if(teams !== undefined && teams.length !== 0){
        //      teamId = teams
        //  }
            return (
                <TeamComponent
                    teamId={team.teamId}
                    sportName={team.gameName}
                    
                    teamName={team.teamName}
                    members={team.members}

                    // userId={this.state.userId}
                />
            )
        })
        return (
            <div className="TeamList">
                {this.state.isLoading ? this.setStateToFalse :
                    <div>
                        <h1>Team List</h1>
                        
                        {teamComponents}
                        
                    </div>}
            </div>
        )
        
    }
}

export default TeamList;