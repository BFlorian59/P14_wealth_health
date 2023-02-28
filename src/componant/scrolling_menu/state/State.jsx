import { useState } from "react";
import states from "../../../data/state";

function State() {
    const [value, setValue] = useState("")

    return(
        <select name="state" id="state" onChange={(e) => setValue(e.target.value)}>
            {states.map((state) => {
                return <option key={state.abbreviation} value={state.name}>{state.name}</option>
            })} 
        </select>        
    )
}

export default State