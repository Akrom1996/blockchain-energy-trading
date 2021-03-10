import React, { Component } from 'react';
import axios from 'axios'
// import { Redirect } from 'react-router-dom'
class login extends Component {

    state = {
        trueUsername: "",
        enteredUsername: ""
    }



    onChangeInput = (e) => {
        this.setState({ enteredUsername: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const user = this.state.enteredUsername

        axios.post('http://192.168.234.137:4000/route/login', { user })
            .then(res => {
                if (res.data.result === "true")
                    this.setState({ trueUsername: user })
                else {
                    this.setState({ trueUsername: "" })
                }
            })
            .then(data => {
                if (this.state.enteredUsername === this.state.trueUsername) {
                    this.props.changeName(this.state.trueUsername)
                    // return <Redirect to='/main' />
                    this.props.history.push("/main");
                    // window.location = '/main'
                }
                else {
                    alert(this.state.enteredUsername + " does not exist")
                }
            })
            .catch(err => console.log(err))


    }
    onReg = (e) => {
        e.preventDefault()
        window.location = '/registration'
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.onSubmit} style={{ marginTop: "10%", border: "1.2px solid #ccc", borderRadius: "3px", padding: "5%" }}>
                    <h2>Login</h2>
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
                        <button className="btn btn-primary" onClick={this.onReg} style={{ marginLeft: "10px" }}> Registration </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default login;