import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './page/Home';
import EmployeeList from "./page/EmployeeList";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './componant/header/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee-list" element={<EmployeeList />} />
          </Routes>
      </BrowserRouter>     
  </React.StrictMode>
);

