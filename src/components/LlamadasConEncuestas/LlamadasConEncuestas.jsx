import { useEffect, useState } from "react";
import "./LlamadasConEncuestas.css";
import axios from "axios";

const LlamadasConEncuestas = () => {
  const [llamadas, setLlamadas] = useState([]);
  const urlApi =
    "http://rovtest01.ddns.net:27015/api/llamadas-cn-encuesta-resp";

  const obtenerLlamadas = async () => {
    try {
      const resp = await axios.get(urlApi);
      setLlamadas(resp.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderizarTBody = () => {
    let tbody = [];

    llamadas.map((ll) => {
      console.log(ll.descripcionOperador);
      tbody.push(
        <tr>
          <td> {ll.llamadaId}</td>
          <td> {ll.descripcionOperador}</td>
          <td> {ll.duracion}</td>
        </tr>
      );
    });

    return tbody;
  };

  useEffect(() => {
    obtenerLlamadas();
  }, []);

  return (
    <div id="LlamadasConEncuestas">
      <h3>Llamadas con Encuestas </h3>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Descripcion</th>
            <th>Duracion</th>
          </tr>
        </thead>
        <tbody>{renderizarTBody()}</tbody>
      </table>
    </div>
  );
};

export default LlamadasConEncuestas;
