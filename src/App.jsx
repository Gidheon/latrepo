import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import DotacionVacantes from "./paginas/DotacionVacantes";
import EditarCliente from "./paginas/EditarCliente";
import Inicio from "./paginas/Inicio";
import NuevoCliente from "./paginas/NuevoCliente";
import Tabla1 from "./paginas/Tabla1";
import Tabla2 from "./paginas/Tabla2";
import Tabla3 from "./paginas/Tabla3";
import Tabla4 from "./paginas/Tabla4";
import Tabla5 from "./paginas/Tabla5";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route path="editar/:id" element={<EditarCliente />} />
          <Route path="dotacion" element={<DotacionVacantes />}>
            <Route path="tabla1" element={<Tabla1 />} />
            <Route path="tabla2" element={<Tabla2 />} />
            <Route path="tabla3" element={<Tabla3 />} />
            <Route path="tabla4" element={<Tabla4 />} />
            <Route path="tabla5" element={<Tabla5 />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
