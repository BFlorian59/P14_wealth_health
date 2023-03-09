import dpt from "../../../data/dpt";

function Department({onChange}) {
    return(
        <div>
            <p>Department</p>
            <select name="state" id="state" onChange={onChange}>
            {dpt.map((dpts) => {
                return <option key={dpts.name} value={dpts.name}>{dpts.name}</option>
            })} 
        </select> 
        </div>
    )
}

export default Department