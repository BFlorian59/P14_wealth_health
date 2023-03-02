import Department from "../scrolling_menu/department/Department"
import State from "../scrolling_menu/state/State";
import React, { useState } from "react";
import Modal from "bf59modal-lib/dist/components/modal";
import "bf59modal-lib/dist/components/modal.css";
import DateInput from "../../utils/date";
import "../../styles/Dateinput.css"

function Modalcreate() {

    const [isOpen, setIsOpen]= useState(false);

    return(
        <div className="container">
            <h2>Create Employee</h2>
            <form>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DateInput/>

                <label htmlFor="start-date">Start Date</label>
                <DateInput/>
                
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
            <button className="button-28" onClick={() => setIsOpen(true)}>Save</button>
            {isOpen && <Modal setIsOpen={setIsOpen} modalText="Employee Created!" />}
        </div>
    )
}
export default Modalcreate