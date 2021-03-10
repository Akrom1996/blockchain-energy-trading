import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddAsset from "./addAsset"
import UpdateBalance from "./updateBalance"
import delEnergy from "./delEnergy"
import ShowStats from "./showStats"
import Navbar from './navbar'


class Main extends Component {

    state = {
        username: "",
        login: false
    }

    componentDidMount = () => {
        this.setState({ username: this.props.username})
    }
    render() {
        return (
            <div>
                <Router>
                    <Navbar login={this.state.login} />
                    <Route exact path='/addAsset' render={(props) => <AddAsset {...props} username={this.state.username} />} />
                    <Route exact path='/updateBalance' render={(props) => <UpdateBalance {...props} username={this.state.username} />} />
                    <Route exact path='/delAsset' component={delEnergy} />
                    <Route exact path='/showAssets' render={(props) => <ShowStats {...props} username={this.state.username} />} />
                </Router>

            </div>
        );
    }
}

export default Main;