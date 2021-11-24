import React, { Component } from 'react'
import UserService from '../services/UserService'

class  UserRegisterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            contactNumber:'',
            password:'',
            isAdminFlag:false

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeContactNumberHandler = this.changeContactNumberHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeIsAdminFlagHandler = this.changeIsAdminFlagHandler.bind(this);

        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);

    }

    // step 3
    // componentDidMount(){

    //     // step 4
    //     if(this.state.id === '_add'){
    //         return
    //     }else{
    //         UserService.getUserById(this.state.id).then( (res) =>{
    //             let user = res.data;
    //             this.setState({firstName: user.firstName,
    //                 lastName: user.lastName,
    //                 emailId : user.emailId,
    //                 contactNumber:user.contactNumber,
    //                 password: user.password,
    //                 isAdminFlag:user.isAdminFlag

    //             });
    //         });
    //     }
    // }
    cancel(){
        this.props.history.push('/');
    }

    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId,
            contactNumber:this.state.contactNumber, password:this.state.password, adminFlag: this.state.isAdminFlag};
        console.log('user => ' + JSON.stringify(user));

        // step 5is_admin_flag
        // if(this.state.id === '_add'){
        UserService.createUser(user).then(res =>{
            this.props.history.push('/userSignInComponent');
        });
        // }else{
        //     UserService.updateUser(user, this.state.id).then( res => {
        //         this.props.history.push('/users');
        //     });
    }


    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});

    }
    changeContactNumberHandler= (event) => {
        this.setState({contactNumber: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    changeIsAdminFlagHandler= (event) => {

        // this.setState({isAdminFlag: parseInt(event.target.value, 10)});
        this.setState({isAdminFlag: event.target.value});
        console.log(event.target.value);
        console.log(this.state.isAdminFlag);
    }

    getTitle(){
        // if(this.state.id === '_add'){
        //     return <h3 className="text-center">Add User</h3>
        // }else{
        return <h2 className="text-center" style={{ marginTop:"15px" }}>Register New User</h2>
        // }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container" style={{ marginTop:"20px" }}>
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" type="email" className="form-control"
                                               value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Contact Number: </label>
                                        <input placeholder="Contact Number" name="contactNumber" className="form-control"
                                               value={this.state.contactNumber} onChange={this.changeContactNumberHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Password: </label>
                                        <input placeholder="Password" name="password" type="password"  className="form-control"
                                               value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>


                                    <div className = "form-group">
                                        <label> Is Admin ? </label>
                                        <select  className="form-control"
                                                 autoFocus={true}
                                                 value={this.state.isAdminFlag} onChange={this.changeIsAdminFlagHandler}>

                                            <option value="false" >Not admin</option>
                                            <option value="true"> Admin</option>

                                        </select>
                                    </div>
                                    <button className="btn btn-success" type="submit" onClick={this.saveOrUpdateUser}>Register</button>
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

export default UserRegisterComponent
