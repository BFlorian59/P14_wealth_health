import DataGridTable from "../componant/table/tablegrid.tsx";

function EmployeeList() {
    return(
        <div className="EmployeeList">
            <h2>Current Employees</h2>
            <DataGridTable/>
        </div> 
    )
}

export default EmployeeList