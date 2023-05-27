import { useEffect, useState } from "react";
import "./LlamadasConEncuestas.css";
import axios from "axios";
import UseDatosLlamada from "../../Hooks/UseDatosLlamada";

const LlamadasConEncuestas = () => {
  const [llamadas, setLlamadas] = useState([]);
  const [datosLlamada, setdatosLlamada] = useState({});

  const obtenerLlamadas = async () => {
    const urlApi =
      "http://rovtest01.ddns.net:27015/api/llamadas-cn-encuesta-resp";

    try {
      const resp = await axios.get(urlApi);
      setLlamadas(resp.data);
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerDatosLlamadas = async (id) => {
    alert(id);
    const urlApi = `http://rovtest01.ddns.net:27015/api/llamada/${id}`;

    try {
      const res = await axios.get(urlApi);
      setdatosLlamada(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderizarTBody = () => {
    let tbody = [];

    llamadas.map((ll) => {
      //console.log(ll.descripcionOperador);
      tbody.push(
        <tr>
          <td> {ll.llamadaId}</td>
          <td> {ll.descripcionOperador}</td>
          <td> {ll.duracion}</td>
          <td>
            <button onClick={() => obtenerDatosLlamadas(ll.llamadaId)}>
              Seleccionar
            </button>
          </td>
        </tr>
      );
    });

    return tbody;
  };

  const renderizarDatosLlamada = () => {
    const div = []
    div.push(
        <UseDatosLlamada llamada={datosLlamada}></UseDatosLlamada>
    )
    return div
  };

  useEffect(() => {
    obtenerLlamadas();
  }, []);

  return (
    <div id="LlamadasConEncuestas">
      <h3>Llamadas con Encuestas </h3>

      <div id="Llamadas">
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

      <div id="datosLlamada">{renderizarDatosLlamada()}</div>
    </div>
  );
};

export default LlamadasConEncuestas;
