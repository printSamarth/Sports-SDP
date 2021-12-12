import React, { Component } from 'react';
import TeamService from '../services/TeamService'
//import VenueService from "../services/VenueService"
import { Multiselect } from 'multiselect-react-dropdown';

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import UserService from '../services/UserService';
class CreateTeam extends Component {
    player = new Array;
    constructor(props) {
        super(props)

        this.state = {
            teamName: "",
            teamMemembers: [],
            creatorUserId: "", //Captain 
            tournamentId: this.props.location.tournamentId,
            sportName: this.props.location.sportName,
            players: []
        }
        
        console.log("Constructor tid", this.state);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
   
    cancel(){
        this.props.history.push('/');
    }
    
    async componentDidMount() {
        const playersTemp = [];
        if(!sessionStorage.getItem("user_id"))
        {
            this.props.history.push('/');
        }
        await UserService.getUser().then((res)=> {
            console.log("All users ", res.data); 
            res.data.forEach(function (item, index) {
                let email = item.split(",")[1];
                let id = item.split(",")[0];
                playersTemp.push({id, email})
              });   
        //console.log("Players", playersTemp);
        });

        await this.setState({
            players: playersTemp
        })
        //console.log("players", this.state.players);
    }

    
    handleSubmit = (e) => {
        e.preventDefault();
        let team = {
                    tournamentId: this.state.tournamentId, 
                    teams: [
                                {
                                    teamName: this.state.teamName,
                                    gameName: this.state.sportName, 
                                    members: this.state.teamMemembers, 
                                }
                            ]
                    };  
        console.log('activity => ' + JSON.stringify(team));
        
        // step 5is_admin_flag
        // if(this.state.id === '_add'){
            TeamService.createTeam(team).then((res) =>{
                console.log("team id", res)
                alert("Team Created!")
                this.props.history.push({pathname:'/TournamentList'});
            });
        // }else{
        //     UserService.updateUser(user, this.state.id).then( res => {
        //         this.props.history.push('/users');
        //     });
            }
    
    
    changeSlotHandlerAdd= async (event) => {
        // this.setState({slots: event.target.value});
        let value
        
        await event.map(data=>(
            // this.state.slots=[],
            // this.state.slots.push(data.value)
            //console.log(data.id)
            this.setState({teamMemembers: [ ...this.state.teamMemembers,  {"userId":  parseInt(data.id)}  ]})
            ))
        //console.log(this.state.teamMemembers)
    }
    changeSlotHandlerRemove= async (event) => {
        // this.setState({slots: event.target.value});
        
        //await event.map(data=>(console.log(data)))
        //const index = this.state.teamMemembers.indexOf(event.target.value.email);
        
        
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
                                            options = {this.state.players}
                                            displayValue="email"
                                            value={this.state.isAdminFlag} 
                                            onSelect={this.changeSlotHandlerAdd}
                                            onRemove={this.changeSlotHandlerRemove}> 
                                                
                                            </Multiselect>
                                        </div>

                                        <button className="btn btn-success" type="submit" onClick={this.handleSubmit}>Create Team</button>
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