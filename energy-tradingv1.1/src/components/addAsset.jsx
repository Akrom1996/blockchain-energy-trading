import React, { Component } from 'react';
import axios from 'axios'

class addAsset extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tradingSymbol: "",
            price: "",
            username: "",
            amount: "",
            date: ""
        }
        this.onAddAsset = this.onAddAsset.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onAddAsset(e) {
        e.preventDefault()
        // e.target.value.isNumber() ? this.setState({ asset: e.target.value }) : alert("Energy amount should be numeric")
        if (e.target.value.match(/^-{0,1}\d+$/)) {
            //valid integer (positive or negative)
            this.setState({ [e.target.name]: e.target.value })
        } else if (e.target.value === "") {
            //valid float
            this.setState({ [e.target.name]: e.target.value })
        } else {
            //not valid number
            alert("Energy amount should be numeric")
        }
    }
    
    onSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://192.168.234.137:4000/route/addAsset', this.state)
            .then(res => {
                console.log(res.data)
                alert(res.data.result)

            })
            .catch(err => console.log(err))
        this.setState({ price: "", amount: "" })
    }
    componentDidMount() {
        this.setState({ username: this.props.username })
        let date = new Date().getMilliseconds()
        this.setState({ date })

        // let tradingSymbol = (this.state.username) + (this.state.date)
        // this.setState({tradingSymbol: tradingSymbol})
    }
    render() {
        return (
            <div>
                <h3 style={{ marginTop: "3%" }}>Create New Asset</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Energy amount: </label>
                        <input
                            type="text"
                            required
                            name="amount"
                            onChange={this.onAddAsset}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Energy price: </label>
                        <input
                            type="text"
                            required
                            name="price"
                            onChange={this.onAddAsset}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Create asset"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default addAsset;