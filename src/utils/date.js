import DatePicker from "react-datepicker";
import React, { useState } from "react";

const DateInput = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
    <>

        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
        />
    </>
      
    );
};

export default DateInput