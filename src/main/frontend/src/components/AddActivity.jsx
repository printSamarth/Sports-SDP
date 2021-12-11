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
            venueData:[],
            isOpenFlag:true

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
    changeIsOpenFlagHandler= (event) => {

        // this.setState({isAdminFlag: parseInt(event.target.value, 10)});
        this.setState({isOpenFlag: event.target.value});
        console.log(event.target.value);
        console.log(this.state.isOpenFlag);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let activity = {sportName: this.state.sportName, activityDate: this.state.activityDate, activityTime : this.state.activityTime,
            numberOfPlayers:this.state.numberOfPlayers, chargesPerPerson :this.state.chargesPerPerson, venue_id:{venue_id:this.state.venue_id} ,
            joinedPlayers:this.state.joinedPlayers, creatorUserId:sessionStorage.getItem("user_id") ,open:this.state.isOpenFlag} ;
        console.log('activity => ' + JSON.stringify(activity));

        // step 5is_admin_flag
        // if(this.state.id === '_add'){
            ActivityService.createActivity(activity).then((res) =>{
                console.log("activity id",res)
                alert("Activity Created!")
                this.props.history.push({pathname:'/ActivityList'});
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

