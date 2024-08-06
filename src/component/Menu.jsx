import { NavLink } from "react-router-dom";


const Menu = () => {
    return (
        <div>
            <ul>
                {/* <li><Link to="/">Home</Link> </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li> */}

                <li><NavLink className={({isActive})=> isActive? "active-item": "pending-item"} to="/">Home</NavLink> </li>
                <li><NavLink className={({isActive})=>isActive? "active-item": "pending-item"} to="/about/10/testName">About</NavLink></li>
                <li><NavLink className={({isActive})=>isActive? "active-item": "pending-item"} to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;