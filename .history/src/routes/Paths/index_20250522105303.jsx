import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import AboutMe from "../../pages/AboutMe";
import Projects from "../../pages/Projects";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path=""
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;