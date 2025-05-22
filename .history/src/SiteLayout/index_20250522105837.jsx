import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SiteLayout = () => {
    return ( 
        <div class>
        <Header />
        <Outlet />
        <Footer />
        </div>
     );
}
 
export default SiteLayout;