import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <NavLink className={}>
            <Link to="/">Home</Link>
            <Link to="/aboutme">Sobre mim</Link>
            <Link to="/projects">Projetos</Link>
        </NavLink>
     );
}
 
export default Header;