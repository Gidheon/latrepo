import React from "react";

const Tabla1 = () => {
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
            <th>1.7mil</th>
            <th>229</th>
            <th>13.32%</th>
            <th>60%</th>
          </tr>
          <tr>
            <th>Tripulante</th>
            <th>222</th>
            <th>75</th>
            <th>33.78%</th>
            <th>60%</th>
          </tr>
          <tr>
            <th>Mando Medio</th>
            <th>339</th>
            <th>54</th>
            <th>15.93%</th>
            <th>60%</th>
          </tr>
          <tr>
            <th>Piloto</th>
            <th>140</th>
            <th>17</th>
            <th>12.14%</th>
            <th>60%</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabla1;
