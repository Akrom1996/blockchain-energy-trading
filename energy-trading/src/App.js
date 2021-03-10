import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import addAsset from "./components/addAsset"
import UpdateBalance from "./components/updateBalance"
import delEnergy from "./components/delEnergy"
import showStats from "./components/showStats"
import Main from './components/main'
import Login from "./components/login"
import Default from "./components/default"
import Registration from "./components/Registration"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "Akrom",
      login: true
    }
    this.changeLogin = this.changeLogin.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
  }


  changeLogin(e) {
    // e.preventDefault()
    this.setState({ login: !this.state.login })
  }
  changeUsername(e){
    this.setState({username: e})
  }
  render() {
    return (
      <Router>
        <div className='container'>
          <Navbar login={this.state.login} />
          <br />
          <Route exact path='/' render={(props) => <Main {...props} username={this.state.username} />} />
          <Route exact path='/login' render={(props) => <Login {...props} loginState={this.changeLogin} changeName = {this.changeUsername}/>} />
          <Route exact path='/addAsset' component={addAsset} />
          <Route exact path='/updateBalance' render={(props) => <UpdateBalance {...props} username={this.state.username} />} />
          <Route exact path='/delAsset' component={delEnergy} />
          <Route exact path='/showAssets' component={showStats} />
          <Route exact path='/register' component={Registration} />
          {/* <Route path ='*' component={Default} /> */}

        </div>
      </Router>
      // <div>
      //   <Main username={this.state.username}/>
      // </div>
    );
  }
}

export default App;
