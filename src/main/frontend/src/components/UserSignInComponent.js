import React, { Component } from 'react';
import UserService from '../services/UserService'
class UserSignInComponent extends Component {

    loginInputRef = React.createRef();
    handleFormSubmit(e) {
        e.preventDefault();
        const loggedIn = this.state.loggedIn;
        console.log(loggedIn)
        console.log(this.state.loggedIn)

        this.props.handleLogin(loggedIn);

    }

    handleFormSubmit = this.handleFormSubmit.bind(this);


    constructor(props) {
        super(props)
        let loggedIn = false
        let uname = ''
        this.state = {
            // step 2
            id: this.props.match.params.id,
            emailId: '',
            password:'',
            loggedIn:'' ,
            uname: this.props.match.params.firstName


        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.validateSignIn = this.validateSignIn.bind(this);

    }


    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    validateSignIn(e)
    {
        e.preventDefault();

        let user = {
            emailId: this.state.emailId,
            password: this.state.password
        }
        console.log("HandleClick")
        console.log(user);
        UserService.loginUser(user).then(res => {
            console.log("response",res);
            console.log("Signin Component", res.data);
            console.log("Publisher", res.data.adminFlag);
            console.log("Request status",res.status)
            //   if(res.status===200)
            this.setState({loggedIn : true})             //setting logged in equal to true

            // this.setState({uname : res.data.firstName})
            // this.setState({uId : res.data.id})

            console.log("LoggedIn");
            console.log(this.state.loggedIn+"999999999999999999");
            console.log(this.state.loggedIn+"6666666666666666")
            console.log(this.state.id)
            console.log(res.data.user_id)
            console.log(res.data.firstName)
            console.log(res.data.adminFlag)

            sessionStorage.setItem('user_id', res.data.user_id);
            this.props.handleLog(this.state.loggedIn,res.data.user_id,res.data.adminFlag);

            if(res.data.adminFlag){
                this.props.history.push('/AdminDashboard');
            }
            else{
                this.props.history.push('/Welcome');
            }

            console.log(this.state.loggedIn);
            alert("Login Successful");

        })
            .catch(err =>{
                console.log(err.response.data);
                alert("Username or Password doesn't Match!");
                // window.location.reload(true);
            });
        //alert("Login")
        // const loggedIn = this.state.loggedIn;
        // console.log(loggedIn)
        console.log(this.state.loggedIn+"6666666666666666")

        // this.props.handleLog(this.state.loggedIn,res.data.user_id);

    }


    render() {
        return (
            <div>

                <div className = "container" style={{ marginTop:"50px" }}>
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                <h2 className="text-center" style={{ marginTop:"15px" }}>Sign In</h2>
                            }
                            <div className = "card-body">
                                <form onSubmit={this.handleFormSubmit}>

                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" type="email" className="form-control"
                                               value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Password: </label>
                                        <input placeholder="Password" name="password" type="password"  className="form-control"
                                               value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>
                                    <br></br>

                                    <button className="btn btn-success btn-block" type="submit" onClick={this.validateSignIn}>Sign In</button>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}


export default UserSignInComponent;