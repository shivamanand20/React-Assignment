import React from 'react'
import axios from "axios"
import { useState } from 'react';
import { Link } from "react-router-dom";

function AddEmployeeComponent() {
    var [employeeid, setemployeeid] = useState('');
    var [employeename , setemployeeName] = useState('');
    var [age, setage] = useState('');
    var [salary,setsalary] = useState('');
    
    var Addemployee = (event) => {
        event.preventDefault();
        var data = {
            employeeid: employeeid,
            employeename: employeename,
            age:age,
            salary:salary
        };
        axios.post("https://localhost:5001/api/Employee", data).then((response) => { }).catch((error) => { });
        alert("New Employee Created !!");
        setemployeeid("");setemployeeName(""); setage("");setsalary("");
    }
    return (
        <div>
            <form onSubmit={Addemployee}>
                <div>
                    <label>Enter Employee id:- </label>
                    <input type="number" placeholder="Enter employeeid" value={employeeid} onChange={(event)=>{setemployeeid(event.target.value)}} required/><br/>
                </div>
                <div>
                    <label>Enter Employee Name:- </label>
                    <input type="text" placeholder="Enter employeename" value={employeename} onChange={(event)=>{setemployeeName(event.target.value)}} required/><br/>
                </div>
                <div>
                    <label>Enter Employee age:- </label>
                    <input type="number" placeholder="Enter age" value={age} onChange={(event)=>{setage(event.target.value)}}required/><br/>
                </div>
                <div>
                    <label>Enter Salary:- </label>
                    <input type="number" placeholder="Enter salary" value={salary} onChange={(event)=>{setsalary(event.target.value)}} required/><br/>
                </div>
                <button>
                    Add Employee
                </button><br/>
                <div className='text-left' style={{ padding: '10px' }}>
                            <Link to='/'>
                                <button className='btn btn-danger'>Back to Home Page</button>
                            </Link>
                        </div>
            </form>
        </div>
    )
}

export default AddEmployeeComponent