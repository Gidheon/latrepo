import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const DotacionVacantes = () => {
  const location = useLocation();

  const urlActual = location.pathname;
  return (
    <>
      <h1 className="text-blue-600 font-extrabold text-3xl mt-7 ml-10">
        Dotacion y Vacantes
      </h1>

      <div className="flex justify-evenly mt-10">
        <div className="text-2xl font-extrabold text-gray-400 ">
          Productividad
        </div>

        <div className="text-2xl font-extrabold text-gray-400 ">Vacantes</div>
      </div>

      {/*  Tablas */}
      <div className="mt-5 ml-40 mr-40 flex justify-evenly">
        {/* tabla 1 */}
        <div>
          <table className="w-full mt-5 table-auto shadow bg-white ">
            <thead className="bg-gray-300 text-gray-600">
              <tr>
                <th
                  className={`${
                    urlActual === "/clientes/dotacion/tabla1"
                      ? "text-blue-300"
                      : "text-gray-600"
                  }  p-2 hover:text-blue-300`}
                >
                  {" "}
                  <Link to={"/clientes/dotacion/tabla1"}>UF1</Link>{" "}
                </th>
                <th
                  className={`${
                    urlActual === "/clientes/dotacion/tabla2"
                      ? "text-blue-300"
                      : "text-gray-600"
                  }  p-2 hover:text-blue-300`}
                >
                  <Link to={"/clientes/dotacion/tabla2"}>UF2</Link>
                </th>
                <th
                  className={`${
                    urlActual === "/clientes/dotacion/tabla3"
                      ? "text-blue-300"
                      : "text-gray-600"
                  }  p-2 hover:text-blue-300`}
                >
                  <Link to={"/clientes/dotacion/tabla3"}>ROL</Link>
                </th>
                <th
                  className={`${
                    urlActual === "/clientes/dotacion/tabla4"
                      ? "text-blue-300"
                      : "text-gray-600"
                  }  p-2 hover:text-blue-300`}
                >
                  <Link to={"/clientes/dotacion/tabla4"}>PAIS</Link>
                </th>
                <th
                  className={`${
                    urlActual === "/clientes/dotacion/tabla5"
                      ? "text-blue-300"
                      : "text-gray-600"
                  }  p-2 hover:text-blue-300`}
                >
                  <Link to={"/clientes/dotacion/tabla5"}>POBLACION</Link>
                </th>
              </tr>
            </thead>

            <tbody></tbody>
          </table>
          <div>
            <Outlet />
          </div>
        </div>

        {/*   tabla 2 */}
        <div className="ml-10">
          <table className="w-full mt-5 table-auto shadow bg-white ">
            <thead className="bg-gray-300 text-gray-600">
              <tr>
                <th
                  className={`${
                    urlActual === "/clientes/dotacion/tabla6"
                      ? "text-blue-300"
                      : "text-gray-600"
                  }  p-2 hover:text-blue-300`}
                >
                  {" "}
                  <Link to={"/clientes/dotacion/tabla5"}>UF1</Link>{" "}
                </th>
                <th
                  className={`${
                    urlActual === "/clientes/dotacion/tabla7"
                      ? "text-blue-300"
                      : "text-gray-600"
                  }  p-2 hover:text-blue-300`}
                >
                  <Link to={"/clientes/dotacion/tabla4"}>UF2</Link>
                </th>
                <th
                  className={`${
                    urlActual === "/clientes/dotacion/tabla8"
                      ? "text-blue-300"
                      : "text-gray-600"
                  }  p-2 hover:text-blue-300`}
                >
                  <Link to={"/clientes/dotacion/tabla2"}>ROL</Link>
                </th>
                <th
                  className={`${
                    urlActual === "/clientes/dotacion/tabla9"
                      ? "text-blue-300"
                      : "text-gray-600"
                  }  p-2 hover:text-blue-300`}
                >
                  <Link to={"/clientes/dotacion/tabla3"}>PAIS</Link>
                </th>
                <th
                  className={`${
                    urlActual === "/clientes/dotacion/tabla10"
                      ? "text-blue-300"
                      : "text-gray-600"
                  }  p-2 hover:text-blue-300`}
                >
                  <Link to={"/clientes/dotacion/tabla1"}>POBLACION</Link>
                </th>
              </tr>
            </thead>

            <tbody></tbody>
          </table>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DotacionVacantes;
