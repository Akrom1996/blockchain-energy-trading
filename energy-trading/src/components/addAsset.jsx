import React, { Component } from 'react';

class addAsset extends Component {
    constructor(props) {
        super(props)
        this.state = {
            asset: ""
        }
        this.onAddAsset = this.onAddAsset.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onAddAsset(e) {
        e.preventDefault()
        // e.target.value.isNumber() ? this.setState({ asset: e.target.value }) : alert("Energy amount should be numeric")
        if (e.target.value.match(/^-{0,1}\d+$/)) {
            //valid integer (positive or negative)
            this.setState({ asset: e.target.value })
        } else if (e.target.value === "") {
            //valid float
            this.setState({ asset: e.target.value })
        } else {
            //not valid number
            alert("Energy amount should be numeric")
        }
    }
    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.asset)
    }
    render() {
        return (
            <div>
                <h3 >Create New Asset</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Energy amount: </label>
                        <input
                            type="text"
                            required
                            value={this.state.asset}
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