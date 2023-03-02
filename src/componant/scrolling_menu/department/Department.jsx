import { useState } from "react"
import dpt from "../../../data/dpt";

function Department() {
    const [value, setValue] = useState("")

    return(
        <div>
            <p>Department</p>
            <select name="state" id="state" onChange={(e) => setValue(e.target.value)}>
            {dpt.map((dpts) => {
                return <option key={dpts.name} value={dpts.name}>{dpts.name}</option>
            })} 
        </select> 
        </div>
    )
}

export default Department