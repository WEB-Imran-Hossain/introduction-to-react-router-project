import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <span>My Website</span>
            <nav>
                {/* <Link to="/">Home</Link> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Post</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                {/* <Link to="/about">About</Link> */}
                {/* <Link to="/contact">Contact Us</Link> */}
                {/* <Link to="/users">Users</Link> */}
                {/* <Link to="/posts">Posts</Link> */}
            </nav>
        </div>
    );
};

export default Header;