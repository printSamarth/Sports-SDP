import React, { Component } from 'react';
import TournamentComponent from "../components/TournamentComponent"

class TournamentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            tournamentInfo: [],
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
            let response = await fetch('http://localhost:8081/api/getAllTournaments/', {
                method: 'GET',
                headers: {
                    'Accept': '*/*'
                }
            })
            let status = response.status;
            if (status === 200) {
                console.log("successful")
            }

            let tempTournamentInfo = await response.json()

            // if (this.state.userId === undefined) {
            //     this.setState({
            //         userId: JSON.parse(localStorage.getItem('userId')),
            //     })
            // } else {
            //     console.log("hi")
            //     localStorage.setItem('userId', JSON.stringify(this.state.userId));
            // }

            this.setState({
                    tournamentInfo: tempTournamentInfo,
                    isLoading: false
                }
            )
        }
                                      //update appropriate api url(get all tournament list api)
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
        const tournamentComponents = this.state.tournamentInfo.map((tournament) => {
            return (
                <TournamentComponent
                    tournamentId={tournament.tournamentId}
                    sportName={tournament.sportName}
                    maxTeam={tournament.maxTeam}
                    noTeam={tournament.noTeam}
                    

                    // userId={this.state.userId}
                />
            )
        })
        return (
            <div className="TournamentList">
                {this.state.isLoading ? this.setStateToFalse :
                    <div>
                        <h1>Tournament List</h1>
                        
                        {tournamentComponents}
                        
                    </div>}
            </div>
        )
        
    }
}

export default TournamentList;