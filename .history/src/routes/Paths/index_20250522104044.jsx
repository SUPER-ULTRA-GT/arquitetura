import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/aboutme" element={}
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;