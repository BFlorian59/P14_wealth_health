import { useState } from "react"

function Department() {
    const [Value, setValue] = useState("")

    return(
        <div>
            <p>Department</p>
            <select  onChange={(e) => setValue(e.target.value)}>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Legal">Legal</option>
            </select>
        </div>
    )
}

export default Department