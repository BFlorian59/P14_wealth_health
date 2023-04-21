import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './page/home';
import EmployeeList from "./page/employeeList";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './componant/header/Header';
import Footer from "./componant/footer/Footer";
import  UserProvider  from './utils/context/contextuser'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee-list" element={<EmployeeList />} />
          </Routes>
          <Footer/>
        </UserProvider>
      </BrowserRouter>     
  </React.StrictMode>
);

