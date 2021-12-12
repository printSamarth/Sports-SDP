import axios from 'axios';
import React, { Component } from 'react';
import ActivityService from "../services/ActivityService"
import VenueService from "../services/VenueService"


class ActivityDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // userId:this.props.location.userId,
            activity_id: this.props.location.activity_id,

            activityData:{},         //contains everything returned by api
            sportName:"",
            activityDate: "",   //can add venue aswell
            activityTime: "",
            venue_id:"",
            numberOfPlayers: "",
            chargesPerPerson: "",
            joinedPlayers:"",

        }
        // this.handleChange = this.handleChange.bind(this)
        this.handleJoin = this.handleJoin.bind(this)

    }

    componentDidMount(){
        if(sessionStorage.getItem("user_id"))
        {
            console.log("userId",sessionStorage.getItem("user_id"))
            console.log("activity id in details",this.state.activity_id)

            ActivityService.getActivityById(this.state.activity_id).then( res => {
                console.log(res.data)
                this.setState({sportName: res.data.sportName});
                this.setState({activityDate: res.data.activityDate});
                this.setState({activityTime: res.data.activityTime});
                this.setState({activityTime: res.data.activityTime});
                this.setState({numberOfPlayers: res.data.numberOfPlayers});
                this.setState({chargesPerPerson: res.data.chargesPerPerson});
                this.setState({joinedPlayers: res.data.joinedPlayers});
                this.setState({venue_id: res.data.venue_id.venueName});

            })
        }
        else
        {
            this.props.history.push('/');
        }


    }

    handleJoin()
    {
        // ActivityService.createActivity(activity).then((res) =>{
        //     console.log("activity id",res)

        //     this.props.history.push({pathname:'/ActivityList'});
        // });



        ActivityService.joinActivity(this.state.activity_id,sessionStorage.getItem("user_id")).then((res) =>{
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

    render() {
        return (
            <div>

                <div className = "card col-md-6 offset-md-3" style={{borderRadius:"25px",padding :"20px"}}>
                    <h3 className = "text-center">Activity Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Activity Name: </label>
                            <div> { this.state.sportName }</div>
                        </div>
                        <div className = "row">
                            <label> Date : </label>
                            <div> { this.state.activityDate }</div>
                        </div>
                        <div className = "row">
                            <label> Time : </label>
                            <div> { this.state.activityTime }</div>
                        </div>

                        <div className = "row">
                            <label> Number of players : </label>
                            <div> { this.state.numberOfPlayers }</div>
                        </div>

                        <div className = "row">
                            <label>Number of players Joined : </label>
                            <div> { this.state.joinedPlayers }</div>
                        </div>

                        <div className = "row">
                            <label> Charges per person : </label>
                            <div> { this.state.chargesPerPerson }</div>
                        </div>

                        <div className = "row">
                            <label> Venue : </label>
                            <div> { this.state.venue_id }</div>
                        </div>
                        {/*
                        <div className = "row">
                            <label> # Players Joined : </label>
                            <div> { this.state.joinedPlayers }</div>
                        </div> */}
                        <br/>
                        <button className="btn btn-primary"  onClick={this.handleJoin}> Join Activity</button>
                    </div>

                </div>
            </div>
        )
    }


    // render() {


    // return (
    //     <div>
    //         <h1 style={{color: "white"}}>Activity Details</h1>

    //         <div className="ActivityDetails_Info">

    //             {/* <img src={activityComponent.imageLocation} style={{width: '20rem'}}/> */}

    //             <h2>Activity Name:{this.state.activityData.sportName}</h2>
    //             {/* <p>Date:{activityComponent.activityDate}</p>
    //             <p>Time:{activityComponent.activityTime}</p> */}
    //             <p>Number of players:{this.state.activityData.numberOfPlayers}</p>
    //             <p>Charges per person:{this.state.activityData.chargesPerPerson}</p>

    //                 <br/>
    //                 <button className="joinActivity" onClick={""} > Join Activity</button>
    //                 {/* <button className="addToCart" onClick={this.addToCart}> Add To Cart</button>
    //                 <button className="buyNow"> Buy Now</button> */}

    //         </div>

    //     </div>


    // )

}

// async getActivityDetails(){
//     let response = await fetch('http://localhost:8081/api/activity/'+this.state.activity_id, {
//         method: 'GET',
//         headers: {
//             'Accept': '*/*'
//         }
//     })
//     let status = response.status;
//     if (status === 200) {
//         console.log("successful")
//     }
//     let activityDetails= await response.json()
//     console.log(JSON.stringify(activityDetails))
//     this.setState({
//         // chapterData: bookDetails["bookChapters"],
//         activityData:activityDetails
//     })
// }

// handleChange(event) {
//     const {name, value, type, checked} = event.target
//     if (type === "checkbox") {
//         let tempCart = this.state.cartChapters
//         if (checked) {
//             tempCart.push(name)
//         } else {
//             tempCart = this.state.cartChapters.filter((chapter) => chapter !== name)

//         }
//         this.setState(
//             {[name]: checked, cartChapters: tempCart}
//         )
//     } else {
//         this.setState({[name]: value})
//     }
// }

// async componentDidMount() {
// if (this.state.activity_id === undefined) {
//     this.setState({
//         // activity_id: JSON.parse(localStorage.getItem('')),
//         userId:JSON.parse(localStorage.getItem('userId'))
//     },()=>this.getActivityDetails())
// } else {
//     localStorage.setItem('activity_id', JSON.stringify(this.state.activity_id));
//     localStorage.setItem('userId', JSON.stringify(this.state.userId));

// await this.getActivityDetails()
// }
// let bookDetails= await this.getBookDetails()
// this.setState({
//     chapterData: bookDetails["bookChapters"],
//     bookData:bookDetails
// })





export default ActivityDetails;