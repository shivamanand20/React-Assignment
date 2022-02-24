// 
import ReactDOM from "react-dom";
import App from "./ClassComponents/StockPrice";

ReactDOM.render((
    <div>
        <App apiUrl="https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC"></App>
        <App apiUrl="https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI"></App>
        <App apiUrl="https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC"></App>
    </div>
), document.getElementById("root"))
