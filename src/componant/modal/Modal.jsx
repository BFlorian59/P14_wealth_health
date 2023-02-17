import Department from "../scrolling_menu/department/Department"
import State from "../scrolling_menu/state/State";

function Modal() {
    return(
        <div className="container">
            <h2>Create Employee</h2>
            <form>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" ></input>

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" ></input>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <State/>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>
                <Department/>
            </form>
            <button>Save</button>
        </div>
    )
}
export default Modal