import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Catalogo } from "./componentes/pages/Catalogo";
import { Carrinho } from "./componentes/pages/Carrinho";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </Router>
  );
}
