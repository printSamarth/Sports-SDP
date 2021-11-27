import React, { Component } from 'react';
import TournamentService from '../services/TournamentService'
//import VenueService from "../services/VenueService"

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
class CreateTournament extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            sportName: "",
            tournamentDate: "",   //can add venue aswell
            tournamentTime: "",
            noTeams: "",    
            venueName: "",
            venue_id: " ",
            chargesPerTeam: "",
            joinedTeam:0
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    // componentDidMount(){
    //    VenueService.getVenue().then( res => {
    //         this.setState({venueData : res.data});
    //         //console.log(this.state.venueData[0].venue_id+"-"+this.state.venueData[0].venueName)
    //     })

    //     let data = sessionStorage.getItem('user_id');
    //     console.log("userid",data)
    // }
    cancel(){
        this.props.history.push('/');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let tournament = {sportName: this.state.sportName, tournamentDate: this.state.tournamentDate, tournamentTime : this.state.tournamentTime,
            noTeams:this.state.noTeams, chargesPerTeam :this.state.chargesPerTeam, venue_id:{venue_id:this.state.venue_id} ,
            joinedTeam:this.state.joinedTeam, creatorUserId:sessionStorage.getItem("user_id")} ;  
        console.log('activity => ' + JSON.stringify(tournament));

        // step 5is_admin_flag
        // if(this.state.id === '_add'){
            TournamentService.createTournament(tournament).then((res) =>{
                console.log("tournament id",res)
                alert("Tournament Created!")
                this.props.history.push({pathname:'/TournamentList'});
            });
        // }else{
        //     UserService.updateUser(user, this.state.id).then( res => {
        //         this.props.history.push('/users');
        //     });
            }
    
    
    //     changeSportNameHandler= (event) => {
    //     this.setState({sportName: event.target.value});
    // }

    // changeDateHandler= (event) => {
    //     this.setState({date: event.target.value});
    // }

    // changeTimeHandler= (event) => {
    //     this.setState({time: event.target.value});
        
    // }
    // changeNoOfPlayersHandler= (event) => {
    //     this.setState({noOfPlayers: event.target.value});
    // }

    // changeChargesPerPerson= (event) => {
    //     this.setState({chargerPerPerson: event.target.value});
    // }


    // changeDateHandler = (event) => {
    //     this.setState({activityDate: event});
    //     console.log("date",event);
    // }


    getTitle(){
        // if(this.state.id === '_add'){
        //     return <h3 className="text-center">Add User</h3>
        // }else{
            return <h2 className="text-center" style={{ marginTop:"15px" }}>Create new Tournament</h2>
        // }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{borderRadius:"25px",padding :"20px"
                                }}>
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body" >
                                    <form >
                                        <div className = "form-group" style={{borderRadius:"25px"}}>
                                            <label> Sport Name: </label>
                                            <input 
                                            placeholder="Sport Name" 
                                            name="sportName" className="form-control" 
                                            style={{borderRadius:"15px"}}
                                            value={this.state.sportName} 
                                            onChange={this.handleChange}/>

                                        </div>
                                        <div className = "form-group">
                                            <label> Date :</label>
                                            <input 
                                            class="input-group date"
                                            placeholder="Date" 
                                            name="tournamentDate" 
                                            type="date"
                                           
                                            className="form-control" 
                                            value={this.state.tournamentDate} 
                                            onChange={this.handleChange} style={{borderRadius:"25px"}}/>
                                        </div>

                                        {/* <DatePicker 
                                            selected={this.state.activityDate}
                                            
                                        
                                            onChange={date => this.changeDateHandler(date)}
                                            // dateFormat="yyyy-mm-dd"
                                            /> */}

                                        <div className = "form-group">
                                            <label> Time:</label>
                                            <input 
                                            placeholder="Time" 
                                        
                                            name="tournamentTime" type="time" 
                                            className="form-control" 
                                            value={this.state.tournamentTime} 
                                            onChange={this.handleChange} 
                                            style={{borderRadius:"25px"}}/>
                                        </div>

                                        <div>
                                            <label> Venue: </label>
                                            <select class="form-control"  name="venue_id" value={this.state.venue_id}  
                                            style={{borderRadius:"25px"}} onChange={this.handleChange}>
                                            
                                            <option value=""> -- Select a Venue -- </option>
                                            {this.state.venueData.map((data) => (
                                            <option key={data.venue_id} value={data.venue_id}>
                                                        {data.venueName+"-"+data.venueAddress}
                                                        </option>    
                                                                ) )} 
                                            </select>
                                         </div>

                                        <div className = "form-group">
                                            <label> Number Of Teams </label>
                                            <input 
                                            placeholder="Number of Teams"   
                                            className="form-control"  
                                            name="noTeams"
                                            type="number"
                                            value={this.state.noTeams} 
                                            onChange={this.handleChange} 
                                            style={{borderRadius:"25px"}}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Charger per team: </label>
                                            <input 
                                            placeholder="Charges per person"    
                                            className="form-control" 
                                            type="number"
                                            name="chargesPerTeam"
                                            value={this.state.chargesPerTeam} 
                                            onChange={this.handleChange} 
                                            style={{borderRadius:"25px"}}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Joined Teams: </label>
                                            <input 
                                            placeholder="Joined Teams"    
                                            className="form-control" 
                                            type="number"
                                            name="joinedTeams"
                                            value={this.state.joinedTeam} 
                                            onChange={this.handleChange} 
                                            style={{borderRadius:"25px"}}/>
                                        </div>
                                   

                                        <button className="btn btn-success" type="submit" onClick={this.handleSubmit}>Create Tournament</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateTournament;