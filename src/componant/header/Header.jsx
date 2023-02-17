import { Link, NavLink } from "react-router-dom";
import LOGO from "../../assets/LOGO.png";
import "../../styles/Header.css"

function Header() {
    return (
        <nav>
            <Link to="/">
                <img className='Header-img' src={LOGO} alt='logo' />
            </Link> 
            <div className = 'Header'>
                <NavLink className='Header-Home' to="/">
                    Home
                </NavLink>
                <NavLink className='Header-Employees' to="/employee-list">
                    View Current Employees
                </NavLink> 
            </div>       
        </nav>
    )
}

export default Header