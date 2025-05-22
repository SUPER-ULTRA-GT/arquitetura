import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <NavLink>
            <Link to="/">Home</Link>
            <Link to="/aboutme">Sobre mim</Link>
        </NavLink>
     );
}
 
export default Header;