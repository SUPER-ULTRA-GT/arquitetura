import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import AboutMe from "../../pages/AboutMe";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/aboutme" element={<AboutMe />} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;