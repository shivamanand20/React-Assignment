import React from 'react';
import Axios from "axios"
import EmployeeDetailsComponent from "../Components/EmployeeDetailsComponent"
import UpdateComponent from '../HooksImplementation/UpdateComponent';
//import PostForm from '../Components/Formpost';

export default class EmployeeListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }
    render() {
        debugger;
        return (
            <div>
                <h1>Employee List is given Below:</h1>
                {this.state.employeeList.map((employee) => {
                    return <EmployeeDetailsComponent key={employee.id} {...employee} deleteEmployee={this.deleteEmployee}></EmployeeDetailsComponent>
                })}
            </div>    
        )
    }

    deleteEmployee = (event) => {
        debugger;
        Axios.delete("https://localhost:5001/api/Employee/" + event.target.id).then(() => {
            alert("Employee is Deleted");
            this.getData();
        })
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        var dataPromise = Axios.get("https://localhost:5001/api/Employee");
        dataPromise.then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    }
}
