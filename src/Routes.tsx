import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";

const CustomRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Result />} />
            <Route path="/image" element={<Result />} />
            <Route path="/news" element={<Result />} />
            <Route path="/videos" element={<Result />} />
        </Routes>
    )
}

export default CustomRoutes;