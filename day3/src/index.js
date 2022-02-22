import ReactDOM from "react-dom";
import App from "./components/Counter";

var i = 0;
    
setInterval(function() {
    debugger;
    i = i + 1;
    console.log('Currently at ' + i);
    ReactDOM.render(<App count={i}></App>, document.getElementById("root"))
}, 1000);


