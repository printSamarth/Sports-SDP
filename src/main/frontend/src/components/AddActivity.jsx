import React, { Component } from 'react';
import ActivityService from '../services/ActivityService'
import VenueService from "../services/VenueService"

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
class AddActivity extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            sportName: "",
            activityDate: "",   //can add venue aswell
            activityTime: "",
            venue_id:"",
            numberOfPlayers: "",
            chargesPerPerson: "",
            joinedPlayers:0,
            isOpenFlag:true,
            venueData:[]

        }
        // this.changeSportNameHandler = this.changeSportNameHandler.bind(this);
        // this.changeDateHandler = this.changeDateHandler.bind(this);
        // this.changeTimeHandler = this.changeTimeHandler.bind(this);
        // this.changeNoOfPlayersHandler = this.changeNoOfPlayersHandler.bind(this);
        // this.changeChargesPerPerson=this.changeChargesPerPerson.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeIsOpenFlagHandler = this.changeIsOpenFlagHandler.bind(this);
    }
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    componentDidMount(){

        VenueService.getVenue().then( res => {
            this.setState({venueData : res.data});
            console.log(this.state.venueData[0].venue_id+"-"+this.state.venueData[0].venueName)
        })

        let data = sessionStorage.getItem('user_id');
        console.log("userid",data)
    }
    cancel(){
        this.props.history.push('/');
    }
    changeIsOpenFlagHandler= async (event) => {
        console.log("Before",this.state.isOpenFlag);
        await this.setState({isOpenFlag: event.currentTarget.value},  () => {
            // this.props.callback(this.state.isOpenFlag)
             console.log("Callback",this.state.isOpenFlag)
        })
        // console.log("Before",this.state.isOpenFlag);
        // this.setState({isOpenFlag: "open" });
        // console.log("Target::",event.currentTarget.value);
        console.log("After",this.state.isOpenFlag);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let activity = {sportName: this.state.sportName,
                        activityDate: this.state.activityDate,
                        activityTime : this.state.activityTime,
                        numberOfPlayers:this.state.numberOfPlayers,
                        chargesPerPerson :this.state.chargesPerPerson,
                        venue_id:{venue_id:this.state.venue_id} ,
                        joinedPlayers:this.state.joinedPlayers,
                        open: this.state.isOpenFlag,
                        creatorUserId:sessionStorage.getItem("user_id")} ;
        console.log('activity => ' + JSON.stringify(activity));


        ActivityService.createActivity(activity).then((res) =>{
            console.log("activity id",res)
            alert("Activity Created!")
            this.props.history.push({pathname:'/ActivityList'});
        });

    }


    getTitle(){
        // if(this.state.id === '_add'){
        //     return <h3 className="text-center">Add User</h3>
        // }else{
        return <h2 className="text-center" style={{ marginTop:"15px" }}>Create new Activity</h2>
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
                                            name="activityDate"
                                            type="date"

                                            className="form-control"
                                            value={this.state.activityDate}
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

                                            name="activityTime" type="time"
                                            className="form-control"
                                            value={this.state.activityTime}
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
                                        <label> Number Of Players </label>
                                        <input
                                            placeholder="Number of Players"
                                            className="form-control"
                                            name="numberOfPlayers"
                                            type="number"
                                            value={this.state.numberOfPlayers}
                                            onChange={this.handleChange}
                                            style={{borderRadius:"25px"}}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Charger per person: </label>
                                        <input
                                            placeholder="Charges per person"
                                            className="form-control"
                                            type="number"
                                            name="chargesPerPerson"
                                            value={this.state.chargesPerPerson}
                                            onChange={this.handleChange}
                                            style={{borderRadius:"25px"}}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Is Open ? </label>
                                        <select  className="form-control"
                                                 // autoFocus={true}
                                                 name="isOpenFlag"
                                                 value={this.state.isOpenFlag} onChange={this.changeIsOpenFlagHandler}>

                                            <option value="false" >Not Open</option>
                                            <option value="true"> Open</option>

                                        </select>
                                    </div>

                                    <button className="btn btn-success" type="submit" onClick={this.handleSubmit}>Create Activity</button>
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

export default AddActivity;