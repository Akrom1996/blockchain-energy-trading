import React, { Component } from 'react';
import axios from 'axios'
class updateBalance extends Component {
    state = {
        currentBalance: "",
        deposit: ""
        
    }
    onChangeDeposit = (e) => {
        if (e.target.value.match(/^-{0,1}\d+$/)) {
            //valid integer (positive or negative)
            this.setState({ deposit: e.target.value })
        } else if (e.target.value === "") {
            //valid float
            this.setState({ deposit: e.target.value })
        } else {
            //not valid number
            alert("Deposit balance should be numeric")
        }

    }
    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    componentDidMount() {
        this.setState({ currentBalance: 5 })
        // const username = this.props.username
        axios.post('http://localhost:4000/route/getBalance',  this.props.username )
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err)
                alert(err)
            })
        //HF
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input
                            type="text"
                            placeholder={this.props.username}
                            className="form-control"
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Current Balance</label>
                        <input
                            type="text"
                            placeholder={this.state.currentBalance}
                            className="form-control"
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Deposit money: </label>
                        <input
                            type="text"
                            required
                            value={this.state.deposit}
                            onChange={this.onChangeDeposit}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="submit"
                            value="Deposit money"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default updateBalance;