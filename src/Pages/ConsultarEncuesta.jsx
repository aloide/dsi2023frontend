import { useState } from "react";
import DatePicker from "react-datepicker";
//import LlamadasConEncuestas from "../components/LlamadasConEncuestas/LlamadasConEncuestas";
import useLlamadasConEncuestas from "../Hooks/UseLlamadasConEncuestas";

import "react-datepicker/dist/react-datepicker.css";
import "./ConsultarEncuesta.css";

const ConsultarEncuesta = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [datosLlamada, setDatosLlamada] = useState();
  const [detalleLlamada, setDetalleLlamada] = useState();
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [idLlamada, setIdLlamada] = useState();

  const { fetchLlamadas, fetchDatosLlamada } = useLlamadasConEncuestas();

  const handleBuscarLlamadas = async () => {
    if (endDate > startDate) {
      setDatosLlamada(await fetchLlamadas(startDate, endDate));
      setMostrarTabla(true);
    } else {
      // Mostrar mensaje de error o realizar acciones adicionales si las fechas no son válidas
      console.error("No se puede obtener llamadas, corrige las fechas...");
    }
  };

  /*<table className="table table-hover">
          <thead>
            <tr>
              <th>Pregunta</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            {tbdoyDatosEncuesta(props.respuestas)}

          </tbody>
        </table>
 */

  const tBodyDetalleLlamada = (master) => {
    const body = [];
    master.map((pyr) => {
      body.push(<tr>
        <td>{pyr.descPregunta}</td>
        <td>{pyr.descRespuesta}</td>
        </tr>)
    });

    return body;
  };

  const bodyDatosLlamada = () => {
    const body = [];
    console.warn(detalleLlamada);

    try {
      body.push(<div>  <span> Cliente: {detalleLlamada.cliente} </span> </div>);
      body.push(<div> <span> Estado: {detalleLlamada.estadoActual} </span></div>);
      body.push(<div> <span> Duracion: {detalleLlamada.duracion} </span></div>);
      body.push(<div> <span> Desc encuesta: {detalleLlamada.descEncuesta} </span></div>);

      body.push(
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Pregunta</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            {tBodyDetalleLlamada(detalleLlamada.respuestas)}
          </tbody>
        </table>
      );
    } catch (error) {
      console.log(error);
    }
    return body;
  };

  const tbdoyDatosEncuesta = () => {
    const body = [];

    datosLlamada.map((llamada) => {
      body.push(
        // posible error por falta de key en tr
        //<tr key="">
        <tr key={llamada.llamadaId}>
          <td>{llamada.llamadaId}</td>
          <td>{llamada.descripcionOperador}</td>
          <td>{llamada.detalleAccionRequerida}</td>
          <td>{llamada.duracion}</td>
          <td>{llamada.observacionAuditor}</td>

          <td>
            <button
              onClick={async () => {
                setMostrarDatos(true);
                setDetalleLlamada(await fetchDatosLlamada(llamada.llamadaId));
                setIdLlamada(llamada.llamadaId);
              }}
            >
              Seleccionar
            </button>
          </td>
        </tr>
      );
    });

    return body;
  };

  const getResponse = () => {
    return (
      <div className="form-principal">
        <div className="form-group">
          <h3>Indicar Periodo</h3>

          <label>
            Fecha de inicio
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </label>

          <label>
            Fecha de fin
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </label>
          <button
            className="btn btn-primary"
            id="btn-buscar-llamadas"
            onClick={handleBuscarLlamadas}
            disabled={endDate <= startDate}
          >
            Buscar llamadas
          </button>

          <table
            id="tabla-de-llamadas"
            className="table table-hover"
            hidden={!mostrarTabla}
          >
            <thead>
              <tr>
                <th>Id Llamada</th>
                <th>Descripcion operador</th>
                <th>Detalle Accion requerida</th>
                <th>Duracion min</th>
                <th>Observaciones auditor</th>
              </tr>
            </thead>
            <tbody>{mostrarTabla && tbdoyDatosEncuesta()}</tbody>
          </table>

          <div id="detalle-de-la-llamada" hidden={!mostrarDatos}>
            {bodyDatosLlamada()}
          </div>

          

        </div>
      </div>
    );
  };

  return getResponse();
};

export default ConsultarEncuesta;
