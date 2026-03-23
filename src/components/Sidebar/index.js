import { NavLink, Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className="nav-bar">
                <Link className="logo" to="/home">
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="glushko" />
        </Link>
        <nav>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/home">
         <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink className={({ isActive }) => `about-link ${isActive ? 'active' : ''}`} to="/about">
  <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
    </NavLink>
        <NavLink className={({ isActive }) => `contact-link ${isActive ? 'active' : ''}`} to="/contact">
  <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
    </NavLink>

        </nav>
        <ul>
            <li>
                <a target="_blank" 
                rel="noreferrer" 
                href="https://www.linkedin.com/in/tarasglushko/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar