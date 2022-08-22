import React from "react";

const Tabla3 = () => {
  return (
    <div>
      <table className="w-full mt-5 table-auto shadow bg-white ">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-2 text-blue-700">Rol</th>
            <th className="p-2 text-blue-700">Total Vac.</th>
            <th className="p-2 text-blue-700">+6 meses</th>
            <th className="p-2 text-blue-700">%</th>
            <th className="p-2 text-blue-700">Tiempo vac{" >"} 6M(%)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Rol General</th>
            <th>3.5mil</th>
            <th>170</th>
            <th>13.52%</th>
            <th>60%</th>
          </tr>
          <tr>
            <th>Tripulante</th>
            <th>400</th>
            <th>62</th>
            <th>41.35%</th>
            <th>60%</th>
          </tr>
          <tr>
            <th>Mando Medio</th>
            <th>201</th>
            <th>37</th>
            <th>22.41%</th>
            <th>60%</th>
          </tr>
          <tr>
            <th>Piloto</th>
            <th>354</th>
            <th>14</th>
            <th>21.32%</th>
            <th>60%</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabla3;
