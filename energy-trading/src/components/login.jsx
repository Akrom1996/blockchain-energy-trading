import React, { Component } from 'react';
import axios from 'axios'
// import { Redirect } from 'react-router-dom'
class login extends Component {

    state = {
        trueUsername: "Akrom",
        enteredUsername: ""
    }

    onChangeInput = (e) => {
        this.setState({ enteredUsername: e.target.value })
        console.log(this.state.enteredUsername)
    }

    onSubmit = (e) => {
        e.preventDefault()
        const user = this.state.enteredUsername

        // axios.post('http://localhost:4000/route/login', { user })
        //     .then(res => console.log(res.data))
        //     .catch(err => console.log(err))
        if (this.state.enteredUsername === this.state.trueUsername) {
            this.props.loginState()
            console.log(this.state.enteredUsername)
            this.props.changeName(this.state.enteredUsername)
            this.props.history.push("/");
        //     // return <Redirect to='/' />
        //     // window.location = '/'

        }
        else {
            alert(this.state.enteredUsername + " does not exist")
        }

    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.onSubmit} style={{ marginTop: "10%", border: "1.2px solid #ccc", borderRadius: "3px", padding: "5%" }}>
                    <div className="form-group" >
                        <label>Username: </label>
                        <input
                            type="text"
                            placeholder="Enter your ID"
                            className="form-control"
                            onChange={this.onChangeInput}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="submit"
                            value="Login"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default login;