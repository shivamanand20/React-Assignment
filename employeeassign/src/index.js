import ReactDOM from "react-dom";
import App from "./ClassComponents/EmployeeLisComponent";
import employeeList from "./data/employeeList"

ReactDOM.render(<App empList={employeeList}></App>, document.getElementById("root"))