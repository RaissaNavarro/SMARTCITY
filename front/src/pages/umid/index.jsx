import React, { useEffect, useState } from "react";
import axios from "axios";
import './umid.css';
import ApexCharts from 'apexcharts'

const Umidade = () => {
  const [umidade, setUmidade] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUmidade = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/umidade/");
        setUmidade(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Erro ao carregar os dados de Umidade.");
      }
    };

    fetchUmidade();
  }, []);

  return (
    <div>
      <div className="title">
        <h1>Registros do Umidade</h1>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
            <th>ID Umidade</th>
              <th>Data de Registro</th>
              <th>Sensor</th>
              <th>Tipo</th>
              <th>Unid</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Localização</th>
              <th>Responsável</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {umidade.map((data) => (
              <tr key={data.id}>
                <td>{data.sensor.id}</td>
                <td>{new Date(data.timestamp).toLocaleString()}</td>
                <td>null</td>
                <td>{data.sensor.tipo}</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Umidade;
