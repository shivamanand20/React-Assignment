   
import { Component } from "react";
import Axios from "axios";

export default class StockPrice extends Component {
    constructor() {
        super();
        this.state = {
            stockPrice: {}
        }
    }

    render() {
        return (
            <div id="holow" style={{border: "5px solid red", padding: "5px", margin: "5px", display: "inline-block"}}>
                <h3 >{this.state.stockPrice.DISPID}</h3>
                <br />
                <div className="center" style={{ width: '450px', margin: '20px', display: 'inline-block' }}>
                    <div className="card-header">
                        {this.state.stockPrice.DISPID} {this.state.stockPrice['52H']}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.stockPrice.company}</h5>
                        <div class="alert alert-primary" role="alert">
                            Before Changed Price : {this.state.stockPrice.priceprevclose}
                        </div>
                        <div class="alert alert-secondary" role="alert">
                           After Price Change :  {this.state.stockPrice.pricechange}
                        </div>
                        <div class="alert alert-success" role="alert">
                            % of Price Change : {this.state.stockPrice.pricepercentchange}
                        </div>
                        <div class="alert alert-danger" role="alert">

                            Current Price : {this.state.stockPrice.pricecurrent}
                        </div>
                        <div class="alert alert-warning" role="alert">
                            Last Updated  : {this.state.stockPrice.lastupd}
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        Year Details: {this.state.stockPrice.YR}
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        setInterval(() => {
            Axios.get(this.props.apiUrl).then((response) => {

                this.setState({ stockPrice: response.data.data })
                console.log(this.state.stockPrice)
            });
        }, 1000);
    }

}
