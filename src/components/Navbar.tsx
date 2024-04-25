import { Link } from 'react-router-dom';
import logo from "../assets/ripisopol__1_-removebg-preview (1).png";

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <Link className='logo' to='/'>
          <img src={logo} alt="logo" />
        </Link>
        <div className='nav-menu'>
          <a href='#about' className='nav-item'>
            About
          </a>
          <a href='#recent-work' className='nav-item'>
            Work
          </a>
          <Link to='/contact' className='nav-item'>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
