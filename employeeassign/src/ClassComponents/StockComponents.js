import React from 'react';
import Axios from "axios"



export default class StockComponents extends React.Component {
    constructor() {
        super();
        this.state = {
            stock: []
        }
    }
    

    render() {
        return (
            <div>
                <h2>SBI Stock Price  </h2>
                <div className="card text-center" style={{ width: '350px', margin: '40px', display: 'inline-block' , color:'blue'}}>
                    <div>
                        <p className="card-text"><b>HP: </b>{this.state.stock.HP}<br></br><b>DISPID: </b>{this.state.stock.DISPID}<br>
                        </br><b>cl5yPerChange: </b>{this.state.stock.cl5yPerChange}<br></br><b>BIDQ: </b>{this.state.stock.BIDQ} <br></br>
                        <b>cl3mval :{this.state.stock.cl3mVal}</b></p>
                    </div>
                </div>
            </div>
        )
    }
    
    componentDidMount() {
        var dataPromise = Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
        dataPromise.then((response) => {
            this.setState({
                stock: response.data.data
            })
        })
    }
}