import { useState, useEffect } from 'react';
import axios from 'axios';
// import GetHook from './AccountApiGetWithHooks';

export default function PutHook(props) {
    debugger;
    var [employeeid, setemployeeid] = useState(props.dataSend ?  props.dataSend.employeeid : "");
    var [employeename, setemployeeName] = useState(props.dataSend ? props.dataSend.employeename : "");
    var [age, setage] = useState(props.dataSend ? props.dataSend.age : "");
    var [salary, setsalary] = useState(props.dataSend ? props.dataSend.salary : "");
    
    
    const onidChange = e => {
        setemployeeid(e.target.value);
    };

    const onNameChange = e => {
        setemployeeName(e.target.value);
    };

    const onageChange = e => {
        setage(e.target.value);
    };

    const onsalaryChange = e => {
        setsalary(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            employeeid,
            employeename ,
            age,
            salary,
    };

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };

        axios
          .post("https://localhost:5001/api/Employee/", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
    };

    return (
        <div className="EmployeeAddComponent">
            <form className="EmployeeAddComponent" onSubmit={handleSubmit}>
               
                <input
                    placeholder={props.dataSend.employeeId} value={employeeid}
                    onChange={onidChange} required />
                <br />

                <input
                    placeholder={props.dataSend.employeename} value={employeename}
                    onChange={onNameChange} required />
                <br />

                <input
                    placeholder={props.dataSend.age} value={age}
                    onChange={onageChange} required />
                <br />

                <input
                    placeholder={props.dataSend.salary} value={salary}
                    onChange={onsalaryChange} required />
                <br />

                <button type="submit">Add Employee </button>
            </form>
        </div>
    );
}