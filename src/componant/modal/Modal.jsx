import Department from "../scrolling_menu/department/Department"
import State from "../scrolling_menu/state/State";
import React, { useEffect, useState } from "react";
import Modal from "bf59modal-lib/dist/components/modal";
import "bf59modal-lib/dist/components/modal.css";
import DateInput from "../../utils/date";
import "../../styles/Dateinput.css"

function Modalcreate() {
    const [startDate, setStartDate] = useState(new Date());
    const [birthDate, setBirthDate] = useState(new Date());
    const [isOpen, setIsOpen]= useState(false);

    const [employee, setemployee]= useState({
        firstname:"",
        lastname:"",
        datebirth: birthDate,
        startdate: startDate,
        street:"",
        city:"",
        state: "",
        department: "",
        zip:"",
    })


    if(isOpen){
        console.log([employee])
        localStorage.setItem('employee-info', JSON.stringify([employee]))
    }       
   
    
    return(
        <div className="container">
            <h2>Create Employee</h2>
            <form>
                <label htmlFor="first-name">First Name</label>
                <input onChange={(firstname)=>{
                    setemployee({
                        ...employee,
                        firstname: firstname.currentTarget.value
                    })
                }} type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input onChange={(lastname)=>{
                    setemployee({
                        ...employee,
                        lastname: lastname.currentTarget.value
                    })
                }} type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DateInput selected={birthDate} onChange={(date) => setBirthDate(date)}/>

                <label htmlFor="start-date">Start Date</label>
                <DateInput selected={startDate} onChange={(date) => setStartDate(date)}/>
                
                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input onChange={(street)=>{
                        setemployee({
                            ...employee,
                            street: street.currentTarget.value
                        })
                    }} id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input onChange={(city)=>{
                        setemployee({
                            ...employee,
                            city: city.currentTarget.value
                        })
                    }} id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <State onChange={(state)=>{
                        setemployee({
                            ...employee,
                            state: state.currentTarget.value
                        })
                    }}/>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input onChange={(zip)=>{
                        setemployee({
                            ...employee,
                            zip: zip.currentTarget.value
                        })
                    }} id="zip-code" type="number" />
                </fieldset>
                <Department onChange={(department)=>{
                        setemployee({
                            ...employee,
                            department: department.currentTarget.value
                        })
                    }}/>
            </form>
            <button className="button-28" onClick={() => setIsOpen(true)}>Save</button>
            {isOpen && <Modal setIsOpen={setIsOpen} modalText="Employee Created!" />}
        </div>
    )
}
export default Modalcreate