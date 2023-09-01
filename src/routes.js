/* function Appimport App from '../conecta/src/App'; */
import Banner from './componentes/Banner.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Banner />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;