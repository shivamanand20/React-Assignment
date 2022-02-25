// import { useState, useEffect } from 'react';
// import axios from 'axios';
// // import GetHook from './AccountApiGetWithHooks';

// export default function PutHook(props) {
//     debugger;
//     var [employeeid, setemployeeid] = useState(props.dataSend ?  props.dataSend.employeeid : "");
//     var [employeename, setemployeeName] = useState(props.dataSend ? props.dataSend.employeename : "");
//     var [age, setage] = useState(props.dataSend ? props.dataSend.age : "");
//     var [salary, setsalary] = useState(props.dataSend ? props.dataSend.salary : "");
    
//     // var [accountNumber, setNumber] = useState("");
//     // var [customerName, setName] = useState("");
//     // var [currentAddress, setAddress] = useState("");
//     // var [currentBalance, setBalance] = useState("");

//     // var [data, setData] = useState([]);

//     // useEffect(() => {
//     //     setNumber(props.dataSend.accountNumber);
//     //     setName(props.dataSend.customerName);
//     //     setAddress(props.dataSend.currentAddress);
//     //     setBalance(props.dataSend.currentBalance);
//     //     debugger;
//     // }, [])

//     const onNumberChange = e => {
//         setemployeeid(e.target.value);
//     };

//     const onNameChange = e => {
//         setemployeeName(e.target.value);
//     };

//     const onAddressChange = e => {
//         setage(e.target.value);
//     };

//     const onBalanceChange = e => {
//         setsalary(e.target.value);
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         const data = {
//             employeeid,
//             employeename ,
//             age,
//             salary,
//     };

//         const requestOptions = {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(data)
//         };

//         axios
//           .post("https://localhost:5001/api/Employee/", data)
//           .then(res => console.log(res))
//           .catch(err => console.log(err));
//     };

//     return (
//         <div className="AccountAddComponent">
//             <form className="AccountAddComponent" onSubmit={handleSubmit}>
//                 {/* <label value="Account Number"></label> */}
//                 <input
//                     placeholder={props.dataSend.employeeId} value={employeeid}
//                     onChange={onNumberChange} required />
//                 <br />

//                 <input
//                     placeholder={props.dataSend.employeename} value={employeename}
//                     onChange={onNameChange} required />
//                 <br />

//                 <input
//                     placeholder={props.dataSend.age} value={age}
//                     onChange={onAddressChange} required />
//                 <br />

//                 <input
//                     placeholder={props.dataSend.salary} value={salary}
//                     onChange={onBalanceChange} required />
//                 <br />

//                 <button type="submit">Add Student </button>
//             </form>
//         </div>
//     );
// }