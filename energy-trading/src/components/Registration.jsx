import React, { Component } from 'react';
import axios from 'axios'
class Registration extends Component {
    state = {
        username: "",
        familyName: ""
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:4000/route/register', this.state)
            .then(res => {
                console.log(res.data)
                alert(res.data)
                window.location = '/'
            })
            .catch(err => {
                console.log(err)
                
            })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input
                            type="text"
                            // placeholder={this.props.username}
                            className="form-control"
                            name="username"
                            onChange={this.onChange}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Family Name</label>
                        <input
                            type="text"
                            // placeholder={this.state.currentBalance}
                            className="form-control"
                            name="familyName"
                            onChange={this.onChange}
                        />
                    </div>


                    <div className="form-group">
                        <input
                            type="submit"
                            value="Register user"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Registration;