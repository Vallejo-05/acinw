import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from "./pages/home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/contato";

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/Sobre" element={<Sobre/>}/>
        <Route path = "/contato" element={<Contato/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    )
}
export default App