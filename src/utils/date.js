import DatePicker from "react-datepicker";
import React from "react";

const DateInput = ({selected, onChange}) => {
    

    return (
    <>

        <DatePicker
            selected={selected}
            onChange={onChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            dateFormat="dd/MM/yyyy"
        />
    </>
      
    );
};

export default DateInput