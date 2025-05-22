import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <NavLink className="flex gap-4 mt-12 ml-16 text-xl">
            <Link to="/">Home</Link>
            <Link to="/aboutme">Sobre mim</Link>
            <Link to="/projects">Projetos</Link>
        </NavLink>
     );
}
 
export default Header;