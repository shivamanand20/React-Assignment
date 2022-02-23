import { useState } from "react";
import EmployeeDetailsComponents from "./EmployeeDetailsComponent";

export default function FiterDataComponent(props) {

    var [searchedInput, setSearchedInput] = useState();
    var searchChange = (event) => {
        console.log(event.target.value);
        setSearchedInput(searchedInput = event.target.value)
    };

    return (
        <>
            {console.log(props.data[0])}
            <h1>Employee List is Given Below...</h1>
            <input type='text' placeholder="search here.." value={searchedInput} onChange={searchChange} />
            <br />
            
            {props.data.map((ele) => {
                if (searchedInput) {
                    if (ele.EmployeeName.toLowerCase() === searchedInput || (ele.EmployeeDesignation).toLowerCase() === searchedInput)
                        return <EmployeeDetailsComponents {...employee} ></EmployeeDetailsComponents>;
                }
                else {
                    return <EmployeeDetailsComponents {...employee}></EmployeeDetailsComponents>
                }
            })}
        </>
    )

}