import React, { useEffect, useState } from "react";
import axios from "axios";
import './temp.css';
import ApexCharts from 'apexcharts'

const Temperatura = () => {
  const [temperatura, setTemperatura] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTemperatura = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/temperatura/");
        setTemperatura(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Erro ao carregar os dados de temperatura.");
      }
    };

    fetchTemperatura();
  }, []);

  return (
    <div>
      <div className="title">
        <h1>Temperaturas Registradas</h1>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Temperatura (°C)</th>
              <th>Data de Registro</th>
              <th>SensorID</th>
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
            {temperatura.map((data) => (
              <tr key={data.id}>
                <td>{data.valor.toFixed(2)}</td>
                <td>{new Date(data.timestamp).toLocaleString()}</td>
                <td>{data.sensor.id}</td>
                <td>{data.sensor.tipo}</td>
                <td>{data.sensor.unidade_medida}</td>
                <td>{data.sensor.latitude}</td>
                <td>{data.sensor.longitude}</td>
                <td>{data.sensor.localizacao}</td>
                <td>{data.sensor.responsavel}</td>
                <td>{String(data.sensor.status_operacional)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Temperatura;
