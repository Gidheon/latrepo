import React from "react";

const Tabla4 = () => {
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
            <th>1.5mil</th>
            <th>521</th>
            <th>41.52%</th>
            <th>60%</th>
          </tr>
          <tr>
            <th>Tripulante</th>
            <th>510</th>
            <th>51</th>
            <th>51.12%</th>
            <th>60%</th>
          </tr>
          <tr>
            <th>Mando Medio</th>
            <th>510</th>
            <th>41</th>
            <th>8.41%</th>
            <th>60%</th>
          </tr>
          <tr>
            <th>Piloto</th>
            <th>150</th>
            <th>21</th>
            <th>35.12%</th>
            <th>60%</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabla4;
