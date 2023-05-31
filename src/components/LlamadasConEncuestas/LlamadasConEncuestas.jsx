import "./LlamadasConEncuestas.css";
import UseDatosLlamada from "../../Hooks/UseDatosLlamada";
import Botonera from "../Botonera/Botonera";
import BtnCancelar from '../BtnCancelar/BtnCancelar';
import BtnDescargarCsv from "../BtnDescargarCsv/BtnDescargarCsv";
import BtnImprimir from "../BtnImprimir/BtnImprimir";
import useLlamadasConEncuestas from "../../Hooks/UseLlamadasConEncuestas";

const LlamadasConEncuestas = () => {
  const { llamadas, datosLlamada, idLlamada, obtenerDatosLlamada } = useLlamadasConEncuestas();

  const renderizarTBody = () => {
    return llamadas.map((llamada) => (
      <tr key={llamada.llamadaId}>
        <td>{llamada.llamadaId}</td>
        <td>{llamada.descripcionOperador}</td>
        <td>{llamada.duracion}</td>
        <td>
          <button className="btn btn-primary" onClick={() => obtenerDatosLlamada(llamada.llamadaId)}>
            Seleccionar
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div id="LlamadasConEncuestas">
      <h3>Llamadas con Encuestas</h3>

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

      <div id="datosLlamada">
        <UseDatosLlamada {...datosLlamada}></UseDatosLlamada>
      </div>

      <Botonera>
        <BtnDescargarCsv id={idLlamada}></BtnDescargarCsv>
        <BtnImprimir></BtnImprimir>
        <BtnCancelar></BtnCancelar>
      </Botonera>
    </div>
  );
};

export default LlamadasConEncuestas;
