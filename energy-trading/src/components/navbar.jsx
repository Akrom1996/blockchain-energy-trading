import React, { Component } from 'react';
import { Link } from "react-router-dom";

class navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/main" className="navbar-brand">
                    Energy trader
            </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/addAsset" className="nav-link">
                                Add Energy Asset
                  </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/updateBalance" className="nav-link">
                                Deposit Balance
                  </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/delAsset" className="nav-link">
                                Delete Energy
                  </Link>

                        </li>
                        <li className="navbar-item">
                            <Link to="/showAssets" className="nav-link">
                                Show assets
                  </Link>

                        </li>
                        <li className="navbar-item">
                            <Link to="/login" className="nav-link">
                                {console.log(this.props.login)}
                                {this.props.login === true ? "Login" : 'Logout'}
                            </Link>

                        </li>
                        <li className="navbar-item">
                            <Link to="/register" className="nav-link">
                                Registration
                  </Link>

                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default navbar;