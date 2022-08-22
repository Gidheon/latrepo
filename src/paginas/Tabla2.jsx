import React from "react";

const Tabla2 = () => {
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
            <th>2.3mil</th>
            <th>300</th>
            <th>14.52%</th>
            <th>60%</th>
          </tr>
          <tr>
            <th>Tripulante</th>
            <th>150</th>
            <th>50</th>
            <th>35.78%</th>
            <th>60%</th>
          </tr>
          <tr>
            <th>Mando Medio</th>
            <th>146</th>
            <th>35</th>
            <th>20.93%</th>
            <th>60%</th>
          </tr>
          <tr>
            <th>Piloto</th>
            <th>150</th>
            <th>25</th>
            <th>10.14%</th>
            <th>60%</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabla2;
