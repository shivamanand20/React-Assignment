import EmployeeDetailsComponent from "./EmployeedetailsComponents";

export default function EmployeeListComponent(props) {
    debugger;
    return (
        <div>
            <h1>Employee List is Given Below...</h1>
            {props.empList.map(function(employee) {
                return (
                    <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
                )
            })}
        </div>
    )
}