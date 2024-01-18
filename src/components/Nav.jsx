import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav shadow ">
            <li className="nav-item">
                <NavLink className={({isActive})=>`nav-link ${isActive ? 'active bg-light' : null}`} to="/Home">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({isActive})=>`nav-link ${isActive ? 'active bg-light' : null}`} to="/Films">Films</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({isActive})=>`nav-link ${isActive ? 'active bg-light' : null}`} to="/People">People</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({isActive})=>`nav-link ${isActive ? 'active bg-light' : null}`} to="/Species">Species</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({isActive})=>`nav-link ${isActive ? 'active bg-light' : null}`} to="/Locations">Locations</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({isActive})=>`nav-link ${isActive ? 'active bg-light' : null}`} to="/Vehicles">Vehicles</NavLink>
            </li>
        </nav>
    )
}

export default Nav