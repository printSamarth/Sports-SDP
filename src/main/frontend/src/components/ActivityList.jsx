import React, { Component } from 'react';
import ActivityComponent from "../components/ActivityComponent"

class ActivityList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            activityInfo: [],
            userId:this.props.location.userId
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
            let response = await fetch('http://localhost:8081/api/activity/', {
                method: 'GET',
                headers: {
                    'Accept': '*/*'
                }
            })
            let status = response.status;
            if (status === 200) {
                console.log("successful")
            }

            let tempActivityInfo = await response.json()

            // if (this.state.userId === undefined) {
            //     this.setState({
            //         userId: JSON.parse(localStorage.getItem('userId')),
            //     })
            // } else {
            //     console.log("hi")
            //     localStorage.setItem('userId', JSON.stringify(this.state.userId));
            // }

            this.setState({
                    activityInfo: tempActivityInfo,
                    isLoading: false
                }
            )
        }
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
        const activityComponents = this.state.activityInfo.map((activity) => {
            if(activity.open || activity.creatorUserId ==sessionStorage.getItem("user_id"))
            {
                return (
                    <ActivityComponent
                        activity_id={activity.activity_id}
                        sportName={activity.sportName}
                        activityDate={activity.activityDate}
                        activityTime={activity.activityTime}
                        numberOfPlayers={activity.numberOfPlayers}
                        chargesPerPerson={activity.chargesPerPerson}
                        venue_id={activity.venue_id.venueName}
                        // userId={this.state.userId}
                    />
                )
            }
        })
        return (
            <div>
            <h1 style={{ textAlign : "center", marginTop:"15px", marginBottom:"15px"}}>
                Activity List
            </h1>
            <div className="ActivityList " >
                {this.state.isLoading ? this.setStateToFalse :
                    <div>
                        {activityComponents}
                    </div>}
            </div>
            </div>
        )

    }
}

export default ActivityList;