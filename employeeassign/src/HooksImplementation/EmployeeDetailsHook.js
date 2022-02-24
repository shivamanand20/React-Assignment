import React from 'react';
import Axios from "axios";
import { useEffect ,useState} from 'react';
import EmployeeDetailsComponent from "../Components/EmployeeDetailsComponent"

export default function EmployeeDetailsHook(){
    var[employeeList,setEmployeeList]=useState([]);
    
    useEffect(() => {
        var dataPromise = Axios.get("https://localhost:5001/api/Employee");
        dataPromise.then((response) => {
            setEmployeeList(response.data);
        })
    }, [])
    
    function GetData(){
        var dataPromise = Axios.get("https://localhost:5001/api/Employee");
        dataPromise.then((response) => {
            setEmployeeList(response.data);
        })
    }

    function DeleteEmployee(event){
        Axios.delete("https://localhost:5001/api/Employee/" + event.target.id).then(() => {
            alert("Employee is Deleted");
            GetData();
        })
    }
    var [employeeid, setemployeeid] = useState(0);
    var [employeename, setemployeeName] = useState('');
    var [age, setage] = useState('');
    var [salary, setsalary] = useState(0);
    
    var changeHandler1 = (event) => {
       setemployeeid  (
            event.target.value
        )
    }
    var changeHandler2 = (event) => {
        setemployeeName(
            event.target.value
        )
    }

    var changeHandler3 = (event) => {
        setage(
            event.target.value
        )
    }

    var changeHandler4 = (event) => {
        setsalary(
            event.target.value
        )
    }

    var data={
        employeeid:parseInt(employeeid,10),
       employeename:employeename,
        age:parseInt(age,10),
        salary:parseInt(salary, 10)

      }
   
function AddEmployee(event)
{
    Axios.post("https://localhost:5001/api/Employee",data).then((response) => {
            alert("Employee is Added")
            GetData();
        })

}
    return (
        <div>
            <div>
            <form onSubmit={AddEmployee}>
                <label>Employeeid:</label>
            <input type="number" id="setemployeeid"  onChange={changeHandler1}/><br></br><br></br>
            <label>Employeename:</label>
            <input  type="text" id="setemployeeName" onChange={changeHandler2}/><br></br><br></br>
            <label>Age:</label>
            <input  type="number"id="setage" onChange={changeHandler3}/><br></br><br></br>
            <label>Salary:</label>
            <input type="number" id="setsalary" onChange={changeHandler4}/>
            <input type="submit" id="submit" value="Submit" />
            </form>
            </div>
            <h2>Employee List is given Below:</h2>

            {employeeList.map((employee) => {
                return <EmployeeDetailsComponent key={employee.employeeid} deleteEmployee={DeleteEmployee}{...employee}></EmployeeDetailsComponent>
            })}
        </div>
    )
}
//     return (
//         <div>
//             <h2>Employee List is given Below:</h2>
//             {employeeList.map((employee) => {
//                 return <EmployeeDetailsComponent key={employee.eid} deleteEmployee={DeleteEmployee}{...employee}></EmployeeDetailsComponent>
//             })}
//         </div>
//     )
// }
