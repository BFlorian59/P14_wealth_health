import React, {useState, createContext } from 'react'

export const UserContext = createContext('');

function UserProvider ({children}) {
    const [user, setUser] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [birthDate, setBirthDate] = useState(new Date());
    const [isOpen, setIsOpen]= useState(false);
    
    const [employee, setemployee]= useState({
        id:0,
        firstname:"",
        lastname:"",
        datebirth: birthDate.toISOString().split('T')[0],
        startdate: startDate.toISOString().split('T')[0],
        street:"",
        city:"",
        state: "",
        department: "",
        zip:"",
    })

    const addEmployee = () =>{
        setIsOpen(true)
        let newid = 0;
        console.log(user)
        if(user.length >0){
        newid = user[user.length-1].id +1;
        }else{
            newid = 0;
        }
        let newObj = [...user];
        employee.id = newid;
        newObj.push(employee);
        setUser(newObj);
    }


    return (
        <UserContext.Provider value={{addEmployee, employee, setStartDate, setBirthDate, setemployee, setIsOpen, birthDate, startDate, isOpen, user}}>
          {children}
        </UserContext.Provider>
      )
}

export default UserProvider

