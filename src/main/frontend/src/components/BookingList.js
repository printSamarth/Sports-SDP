import axios from 'axios';
import React, { Component } from 'react';
import { CardDeck } from 'react-bootstrap';
import BookingService from "../services/BookingService"
import Venueshow from "./Venueshow"

class BookingList extends Component {
    constructor (props){
        super(props)
        this.state={
            bList : [],
            uId: sessionStorage.getItem("user_id")
        }
        console.log("Booking component",this.state.uId);
    }
    
    async componentDidMount(){
        console.log(this.props.uId)
        console.log(this.state.uId)
        console.log("Booking component");
        // this.state.uId = this.props.uId
        
        
        await BookingService.getBookingByUser(this.state.uId).then((res) => {
            this.setState({ bList: res.data});
            console.log(res.data)

        });
        console.log(this.state.bList)
    }
    
    bookingTime(booking){
    //    booking.venue.slots.forEach( function(element) {
    //        if(element.slot_id==booking.venue.slot){
    //         console.log(element.start_time)   
    //         return element.start_time;
    //        }

    //    });
    console.log(booking.slot)
    let time=booking.venue.slots.map(function(data){
        console.log(data.slot_id)
        console.log(booking.slot)
        if(data.slot_id==booking.slot){
                    console.log(data.start_time)   
                    return (data.start_time+" To "+data.end_time)
                   }
    });
         return(time);
}

    render() {

        const bookingComponents = this.state.bList.map((booking) => {
        if(booking.activityDto)
        {
            return(
                
                    <tr key = {booking.activityDto.activityId}>
                        <td> { booking.activityDto.activityDate} </td>
                        <td> { booking.activityDto.sportName} </td>

                        <td> { booking.activityDto.venueDto.venueName} </td>
                        <td> { booking.activityDto.venueDto.venueAddress} </td>
                
                        <td> { booking.activityDto.chargesPerPerson} </td>
                        {/* <td> { booking.activityDto.numberOfPlayers} </td>     */}
                    </tr> 
                
            );
        }
    })
    const TourbookingComponents = this.state.bList.map((booking) => {
        if(booking.tournamentDto)
        {
            return(
                        <tr key = {booking.tournamentDto.tournamentId}>
                            <td> { booking.tournamentDto.activityDate} </td>
                            <td> { booking.tournamentDto.gameName} </td>
                            <td> { booking.tournamentDto.teamCount} </td>
                            <td> { booking.tournamentDto.venue.venueName} </td>
                            <td> { booking.tournamentDto.venue.venueAddress} </td>                                        
                        </tr>
            );
        }
    })
    return(
        <div>
            <h1 style={{ textAlign : "center", marginTop:"15px", marginBottom:"15px"}}>
                Activity Booking History
            </h1>
            <table  className = "table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Sports</th>
                    <th> Venue Name</th>
                    <th> Venue Address</th>
                    <th> Charges</th>
                    {/* <th> Number of players</th> */}
                </tr>
            </thead>
            <tbody>
                    {bookingComponents}
            </tbody>
            </table>

            <h1 style={{ textAlign : "center", marginTop:"15px", marginBottom:"15px"}}>
                Tournament booking History
            </h1>
            <table  className = "table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Sports</th>
                    <th> Teams registered</th>
                    <th> Venue Name</th>
                    <th> Venue Address</th>
                    
                    {/* <th> Number of players</th> */}
                </tr>
            </thead>
            <tbody>
                    {TourbookingComponents}
            </tbody>
            </table>

        </div>
    )
}
}

export default BookingList;