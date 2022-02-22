import EmployeeDetailsComponent from "./EmployeeDetailsComponent";
import FilterComponent from "./FilterComponent";
import { useState } from "react";

export default function EmployeeListComponent(props) {
    
    const [filteredName, setFilteredName] = useState("")

    const filteredItems = props.empList.filter(
        (item) => item.name.toLowerCase().includes(filteredName.toLowerCase())
    )

    const filterHandler = (name) => {
        setFilteredName(name)
    }

    return (
        <div>
            
            <h1>Employee List is Given Below...</h1>
            <FilterComponent onFilter={filterHandler} searchText={filteredName}></FilterComponent>
            <div>
                {filteredItems.map(function(employee) {
                    return (
                        <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
                    )
                })}
            </div>
        </div>
    )
}