import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login'
import Registration from './components/Registration'
import Main from './components/Main'
import "bootstrap/dist/css/bootstrap.css";


class App extends Component {
  state = {
    username: ""
  }

  changeUsername = (e) => {
    this.setState({ username: e })
    console.log(this.state.username)
  }
  render() {
    return (
      <div className='container'>
        <Router>
          <Route exact path='/' render={(props) => <Login {...props} changeName={this.changeUsername} />} />
          <Route exact path='/registration' component={Registration} />
          <Route exact path='/main' render={(props) => <Main {...props} username={this.state.username} />}  />
        </Router>
      </div>
    );
  }
}

export default App;
