import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Welcome from './components/Welcome'
import UserSignInComponent from "./components/UserSignInComponent";
import UserRegisterComponent from './components/UserRegisterComponent';
import CreateTournament from './components/CreateTournament';
import TournamentList from './components/TournamentList';
import CreateTeam from './components/CreateTeam';
import TeamList from './components/TeamList';
import Venueshow from './components/Venueshow';
import 'bootstrap/dist/css/bootstrap.css';

import First from './components/First';


class App extends React.Component {

  constructor(props){
    super(props)

    let isloggedIn = false
    let uId
    let adminFlag = false
    this.state = {
      isloggedIn ,
      uId ,
      adminFlag
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(loggedIn,Id,isAdminFlag) {
    console.log(isAdminFlag)
    this.setState({ isloggedIn: loggedIn , uId: Id,adminFlag:isAdminFlag});
  }

  render(){
    return (

        <div  >
          <Router>
            <HeaderComponent adminFlag={this.state.adminFlag} isloggedIn={this.state.isloggedIn}/>
            <div className="container">
              <Switch>
                <Route path="/" exact component={First}></Route>
                <Route path="/Welcome"   render={()=> <Welcome isloggedIn={this.state.isloggedIn}/>}></Route>
                <Route path="/userRegisterComponent" component={UserRegisterComponent}></Route>
                <Route path="/CreateTournament" component={CreateTournament}></Route>
                <Route path="/Venueshow" component={Venueshow}></Route>
                <Route path="/userSignInComponent" render={(props) => <UserSignInComponent {...props} handleLog = {this.handleLogin} />}></Route>
                <Route path="/TournamentList" component={TournamentList}></Route>
                <Route path="/CreateTeam" component={CreateTeam}></Route>
                <Route path="/TeamList" component={TeamList}></Route>
              </Switch>
            </div>
            <FooterComponent/>
          </Router>
        </div>

    );
  }
}

export default App;
