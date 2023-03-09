import DatePicker from "react-datepicker";
import React from "react";

const DateInput = ({selected, onChange}) => {
    
    //console.log(startDate)
    return (
    <>

        <DatePicker
            selected={selected}
            onChange={onChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
        />
    </>
      
    );
};

export default DateInput