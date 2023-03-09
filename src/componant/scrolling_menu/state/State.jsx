import states from "../../../data/state";

function State({onChange}) {
    

    return(
        <select name="state" id="state" onChange={onChange}>
            {states.map((state) => {
                return <option key={state.abbreviation} value={state.name}>{state.name}</option>
            })} 
        </select>        
    )
}

export default State