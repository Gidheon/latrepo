import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const urlActual = location.pathname;

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py10">
        <Link to={"/clientes"}>
          <h2 className="text-4xl font-black text-center text-white"> LATAM</h2>
        </Link>
        <nav className="mt-10 ">
          <Link
            to="/clientes/dotacion/tabla1"
            className={`${
              urlActual === "/clientes/dotacion/tabla1" ||
              "/clientes/dotacion/tabla2" ||
              "/clientes/dotacion/tabla3" ||
              "/clientes/dotacion/tabla4" ||
              "/clientes/dotacion/tabla5"
                ? "text-blue-300"
                : "text-white"
            }  text-2xl block mt-2 hover:text-blue-300`}
          >
            Dotacion y Vacantes
          </Link>
          <Link
            to="/clientes/nuevo"
            className={`${
              urlActual === "/clientes/nuevo" ? "text-blue-300" : "text-white"
            }  text-2xl block mt-2 hover:text-blue-300`}
          >
            Ingresos y Salidas
          </Link>
          <Link
            to="#"
            className="text-white text-2xl block mt-2 hover:text-blue-300"
          >
            Cuenta de remuneraciones
          </Link>
          <Link
            to="#"
            className="text-white text-2xl block mt-2 hover:text-blue-300"
          >
            RH Connect
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
