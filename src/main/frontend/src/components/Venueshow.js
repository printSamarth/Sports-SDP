import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {Button , Card} from "react-bootstrap"
import { Link } from 'react-router-dom';


function Venueshow(props){
    console.log(props);
    const {url} = props.img_link;
    return(
        <div>
            <Card style={{ width: '18rem' }}>

                <Card.Img variant="Top" src={props.img_link} />
                <Card.Body>
                    {/* <label>Venue Name:</label> */}
                    <Card.Title>Venue Name:</Card.Title>
                    <Card.Text>{props.venuename}</Card.Text>
                    <Card.Title>Venue Address:</Card.Title>
                    <Card.Text>
                        {props.venueaddress}
                    </Card.Text>
                    <Card.Title>Venue Cost:</Card.Title>
                    <Card.Text>{props.costperhour}</Card.Text>
                    <Link to={{pathname:"/DoBooking",params:{props}  }} >
                        {/* <a className="nav-link" href="" tabindex="-1" aria-disabled="true">proceed to book</a> */}
                        <button className="btn btn-primary" >proceed to book</button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
        // <div>
        //     <h2>55</h2>
        //     <img src = {props.img_link}/>
        //     <h2>{props.venuename}</h2>
        //     <p>Address : {props.venueaddress}</p>
        //     <p>{props.coatperhour}</p>

        // </div>
    )

}

export default Venueshow;