import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="flex gap-4 mt-12 ml-16 text-xl">
            <Link to="/" className="text-blue-500 hover:underline">Home</Link>
            <Link to="/aboutme" className="text-blue-500 hover:underline">Sobre mim</Link>
            <Link to="/projects" className="text-blue-500 hover:underline">Projetos</Link>
        </div>
     );
}
 
export default Header;