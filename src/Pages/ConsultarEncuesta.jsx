import { useState } from "react";
import DatePicker from "react-datepicker";
//import LlamadasConEncuestas from "../components/LlamadasConEncuestas/LlamadasConEncuestas";
import useLlamadasConEncuestas from "../Hooks/UseLlamadasConEncuestas";

import "react-datepicker/dist/react-datepicker.css";
import "./ConsultarEncuesta.css";

import Botonera from '../components/Botonera/Botonera'
import BtnCancelar from '../components/BtnCancelar/BtnCancelar'
import BtnImprimir from '../components/BtnImprimir/BtnImprimir'
import BtnDescargarCsv from '../components/BtnDescargarCsv/BtnDescargarCsv'

const ConsultarEncuesta = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [datosLlamada, setDatosLlamada] = useState();
  const [detalleLlamada, setDetalleLlamada] = useState();
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [detalleLlamadaCSV, setDetalleLlamadaCSV] = useState();
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

  const tBodyDetalleLlamada = (master) => {
    const body  = [];
    if(!master) return body;
    master.map((pyr) => {
      body.push(<tr>
        <td>{pyr.descPregunta}</td>
        <td>{pyr.descRespuesta}</td>
        </tr>)
    });

    return body;
  };
  const enviarIdLLamada =()=>{
    console.log("🚀 ~ file: ConsultarEncuesta.jsx:51 ~ enviarIdLLamada ~ idLlamada:", idLlamada)
    const id = idLlamada ?? -1;
    console.log("🚀 ~ file: ConsultarEncuesta.jsx:52 ~ enviarIdLLamada ~ id:", id)
    return (
      <div>
        <a className="btn btn-primary"
        href={`http://localhost:27015/api/llamada-csv/`+ id}>
          Descargar CSV
        </a>
      </div>
    );
  }

  const bodyDatosLlamada = () => {
    const body = [];

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
      console.log("aaaaaaaaaa" + error);
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
                await setDetalleLlamada(await fetchDatosLlamada(llamada.llamadaId));
                await setDetalleLlamadaCSV(detalleLlamada)
                await setIdLlamada(llamada.llamadaId);
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

          <Botonera>
          <div id="btn-csv" >
            {enviarIdLLamada()}
          </div>
            <BtnImprimir></BtnImprimir>
            <BtnCancelar></BtnCancelar>
            </Botonera>

        </div>
      </div>
    );
  };

  return getResponse();
};

export default ConsultarEncuesta;
