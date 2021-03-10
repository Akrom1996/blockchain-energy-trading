import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap';

class showStats extends Component {
    state = {
        assets: []
    }
    componentDidMount = () => {
        let user = this.props.username
        axios.post('http://192.168.234.137:4000/route/getAssets', { user })
            .then(res => {
                console.log(res.data.results)
                this.setState({ assets: res.data.results })
            })
            .catch(err => console.log(err))
    
    }

    energyData = (data) => {
        console.log(data)
        alert("Charge will be " + Number(data.value.tradingEnergyPrice * data.value.amount))
        let id = data.value.tradingSymbol
        let user = this.props.username
        axios.post('http://192.168.234.137:4000/route/energyTrade', {id , user})
        .then(res=>{
            console.log(res.data.results)
            // window.location = "/main"
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <h3>Show current existing assets in the network</h3>
                {
                    this.state.assets.length > 0 ?
                    this.state.assets.map(element => {
                        // console.log(element.key + ": " + element.value.amount)
                        return (
                            <div className="card w-50" style={{ margin: "20px", alignContent: "center" }} key={element.key}>
                                <div className="card-body">
                                    <p className="card-text">Energy ID: {element.value.tradingSymbol}</p>
                                    <p className="card-text">Energy Owner: {element.value.traderId}</p>
                                    <p className="card-text">Energy amount: {element.value.amount} KWh</p>
                                    <p className="card-text">Energy price: {element.value.tradingEnergyPrice} Won</p>
                                    <p className="card-text">Date mannufactured: {element.value.date}</p>
                                    <Button className="btn btn-primary" onClick={()=> this.energyData(element)}>Buy this item</Button>
                                </div>
                            </div>
                        )
                    }) : <h3>Energy list is empty!</h3>
                }
            </div>
        );
    }
}

export default showStats;