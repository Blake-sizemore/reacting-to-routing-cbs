import { NavLink } from 'react-router-dom';
import Imgnav from './Imgnav';

const Nav = () => {

    return (
        <nav className="nav shadow rounded-bottom border border-secondary-subtle bg-light">
            <Imgnav />
            <div className='d-flex align-items-end justify-content-between'>
                <div className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link   ${isActive ? 'active text-dark  border-top border-start border-end border-secondary-subtle bg-secondary-subtle rounded-top' : null}`} to="/Home">Home</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link   ${isActive ? 'active text-dark  border-top border-start border-end border-secondary-subtle bg-secondary-subtle rounded-top' : null}`} to="/Films">Films</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'active text-dark  border-top border-start border-end border-secondary-subtle bg-secondary-subtle rounded-top' : null}`} to="/People">People</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'active text-dark  border-top border-start border-end border-secondary-subtle bg-secondary-subtle rounded-top' : null}`} to="/Species">Species</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'active text-dark  border-top border-start border-end border-secondary-subtle bg-secondary-subtle rounded-top' : null}`} to="/Locations">Locations</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'active text-dark  border-top border-start border-end border-secondary-subtle bg-secondary-subtle rounded-top' : null}`} to="/Vehicles">Vehicles</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Nav