import React, { Component } from 'react';
import TeamService from '../services/TeamService'
//import VenueService from "../services/VenueService"
import { Multiselect } from 'multiselect-react-dropdown';

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
class CreateTeam extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teamName: "",
            teamMemembers: [],
            creatorUserId: "", //Captain 
            tournamentId: this.props.tournamentId,
            sportName: this.props.sportName
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
    /* 
        ------------------------------------------
        Commentd Venue population code as of now.
        ------------------------------------------

    */

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
    componentDidMount() {
        if(!sessionStorage.getItem("user_id"))
        {
            this.props.history.push('/');
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let team = {teamName: this.state.teamName, teamMemembers: this.state.teamMemembers, 
            tournamentId: this.state.tournamentId, sportName: this.state.sportName, creatorUserId:sessionStorage.getItem("user_id")} ;  
        console.log('activity => ' + JSON.stringify(team));

        // step 5is_admin_flag
        // if(this.state.id === '_add'){
            TeamService.createTeam(team).then((res) =>{
                console.log("team id", res)
                alert("Team Created!")
                this.props.history.push({pathname:'/TeamList'});
            });
        // }else{
        //     UserService.updateUser(user, this.state.id).then( res => {
        //         this.props.history.push('/users');
        //     });
            }
    
    players = [
        { label: "s@gmail.com", value: "10" },
        { label: "a@gmail.com", value: "20" },
        { label: "b@gmail.com", value: "30" },
        
        ];
    changeSlotHandlerAdd= (event) => {
        // this.setState({slots: event.target.value});
        let value
        event.map(data=>(
            // this.state.slots=[],
            // this.state.slots.push(data.value)
            this.setState({teamMemembers: [ ...this.state.teamMemembers,  {"userId":  parseInt(data.value)}  ]})
            ))
        console.log(this.state.slots)
    }
    changeSlotHandlerRemove= (event) => {
        // this.setState({slots: event.target.value});
        console.log(event);
    }

    getTitle(){
        // if(this.state.id === '_add'){
        //     return <h3 className="text-center">Add User</h3>
        // }else{
            return <h2 className="text-center" style={{ marginTop:"15px" }}>Create new Team</h2>
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
                                            <label> Team Name: </label>
                                            <input 
                                            placeholder="Team Name" 
                                            name="teamName" className="form-control" 
                                            style={{borderRadius:"15px"}}
                                            value={this.state.teamName} 
                                            onChange={this.handleChange}/>

                                        </div>
                                        <div className = "form-group">
                                            <label> Players available</label>
                                            <Multiselect  className="form-control" 
                                            autoFocus={true}
                                            options = {this.players}
                                            displayValue="label"
                                            value={this.state.isAdminFlag} 
                                            onSelect={this.changeSlotHandlerAdd}
                                            onRemove={this.changeSlotHandlerRemove}> 
                                                
                                            </Multiselect>
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

export default CreateTeam;