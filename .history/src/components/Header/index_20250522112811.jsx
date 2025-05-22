import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="flex gap-4 mt-12 ml-16 text-xl">
            <NavLink to="/" className="[&.active]:font-bold [&.active]:text-blue-700 text-blue-500 hover:underline">Home</NavLink>
            <NavLink to="/aboutme" className="[&.active]:font-bold [&.active]:text-blue-700 text-blue-500 hover:underline">Sobre mim</NavLink>
            <NavLink to="/projects" className="text-blue-500 hover:underline">Projetos</NavLink>
        </div>
     );
}
 
export default Header;