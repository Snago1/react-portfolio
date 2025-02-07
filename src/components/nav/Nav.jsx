import { Link } from "react-scroll";
import "./Nav.css";

const Nav = () => {
  const items = [
    "home",
    "about",
    "skills",
    "services",
    "portfolio",
    "clients",
    "contact",
  ];
  return (
    <nav className="nav nav-menu">
      <div className="nav-menu">
        {items.map((item, index) => (
          <Link 
          to={item}
          key={index} 
          className="nav-link">
            {item}
          </Link>
        ))}
      </div>
      {/* <ul className="nav-menu">
        <li className="nav-item">
          <a href="" className="nav-link active">
            home
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            skills
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            Contact
          </a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Nav;
