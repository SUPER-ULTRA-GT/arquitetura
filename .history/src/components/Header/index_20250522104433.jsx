import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <NavLink>
            <Link to="/">Home</Link>
        </NavLink>
     );
}
 
export default Header;