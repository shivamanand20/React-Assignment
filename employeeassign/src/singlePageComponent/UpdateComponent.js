import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

export default class UpdateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            empoyeeid:0,
            employeename:'',
            age:'',
            salary:0
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        debugger;
        return (
            <div>
                <form onSubmit={this.updateEmployee}>
                        <label>Empid: </label>
                        <input type="number" name="employeeid" placeholder={this.state.employeeid} /><br></br><br></br>
                        <label>EmpName: </label>
                        <input type="text" name="employeename" placeholder={this.state.employeename} onChange={this.changeHandler} /><br></br><br></br>
                        <label>Age: </label>
                        <input type="number" name="age" placeholder={this.state.age} onChange={this.changeHandler} /><br></br><br></br>
                        <label>EmpSalary: </label>
                        <input type="number" name="salary" placeholder={this.state.salary} onChange={this.changeHandler} /><br></br><br></br>
                        <input type="submit" value="Update" /><br></br><br></br>
                    </form>
                    <Link to='/'>
                                <button className='btn btn-danger'>Back to Home Page</button>
                            </Link>
                    
            </div>
        )
    }
    updateEmployee = () => {
        var putdata={
            employeeid:this.state.employeeid,
            employeename:this.state.employeename,
            age:this.state.age,
            salary:this.state.salary
        }
        Axios.put("https://localhost:5001/api/Employee/"+this.state.employeeid,putdata).then(()=>{
            alert(putdata.employeename);   
        })   
    }
    componentDidMount() {
        debugger;
        alert(this.props.match.params.employeeid);
        Axios.get("https://localhost:5001/api/Employee/" + this.props.match.params.employeeid).then((response) => {
            this.setState({
                employeeid: response.data.employeeid,
                employeename: response.data.employeename,
                age: response.data.age,
                salary: response.data.salary
            })
        })       
    }
}