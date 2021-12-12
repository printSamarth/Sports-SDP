import React, {Component} from "react"
import {Link} from "react-router-dom"


class ActivityComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activity_id: this.props.activity_id,
            sportName: this.props.sportName,
            activityDate: this.props.activityDate,
            activityTime: this.props.activityTime,
            numberOfPlayers: this.props.numberOfPlayers,
            chargesPerPerson: this.props.chargesPerPerson,
            venue_id:this.props.venue_id,
            userId:this.props.userId
        }
    }


    render() {
        return (
            <div className = "card col-md-6 offset-md-3" style={{borderRadius:"25px",padding :"20px"}}>
                <div className="card-body">

                    <div className="ActivityComponent" href="" style={{width: '30rem'}}>

                        <h3>{this.state.sportName}</h3><br/>
                        {/*<p>Activity Id: {this.state.activity_id}</p>*/}
                        <p>Activity Date:{this.state.activityDate}</p>
                        {/*<p>Activity Time:{this.state.activityTime}</p>*/}

                        <p>Players Required:{this.state.numberOfPlayers} </p>
                        <p>Charges per person:{this.state.chargesPerPerson} </p>
                        <p>Venue ID:{this.state.venue_id} </p>
                        <Link to={{pathname:'/ActivityDetails',activity_id:this.state.activity_id, userId:this.state.userId}}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>

                </div>
            </div>

        )
    }
}

export default ActivityComponent;