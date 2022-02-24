import React from 'react';
import Axios from "axios"
// import EmployeeDetailsComponent from "../components/ApiSbaccountdetails"

export default class PostToApi extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList:[],
            employeeid:0,
            employeename:'',
            age:0,
            salary:0

        }
    }
changeHandler=(event)=>{
this.setState({
    [event.target.id]:event.target.value
})
}
    render() {
        return (
            <div>
            <form onSubmit={this.AddEmployee}>
                <label>Employeeid:</label>
            <input type="number" id="employeeid"  onChange={this.changeHandler}/><br></br><br></br>
            <label>Employeename:</label>
            <input  type="text" id="employeename" onChange={this.changeHandler}/><br></br><br></br>
            <label>Age:</label>
            <input  type="number"id="age" onChange={this.changeHandler}/><br></br><br></br>
            <label>Salary:</label>
            <input type="number" id="salary" onChange={this.changeHandler}/>
            <input type="submit" id="submit" value="Submit" />
            </form>
            </div>
        )
    }

   

debugger;
    AddEmployee = (event) => {
        event.preventDefault();
        
      let data1={
        employeeid:parseInt(this.state.employeeid,10),
        employeename:this.state.employeename,
        age:parseInt(this.state.age,10),
        salary:parseInt(this.state.salary, 10)

      };
     
      debugger;
        Axios.post("https://localhost:5001/api/Employee",data1).then((response) => {
            alert("Employee is Added");
            this.getData();
        })
        
    }
}
debugger;