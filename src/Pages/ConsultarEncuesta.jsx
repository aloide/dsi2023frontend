import { useState } from "react";
import DatePicker from "react-datepicker";
import LlamadasConEncuestas from "../components/LlamadasConEncuestas/LlamadasConEncuestas";
import useLlamadasConEncuestas from "../Hooks/UseLlamadasConEncuestas";

import "react-datepicker/dist/react-datepicker.css";
import "./ConsultarEncuesta.css";

const ConsultarEncuesta = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { llamadas, datosLlamada, idLlamada, obtenerDatosLlamada } =
    useLlamadasConEncuestas(startDate, endDate);

  const handleBuscarLlamadas = () => {
    if (endDate > startDate) {
      obtenerDatosLlamada(startDate, endDate);
    } else {
      // Mostrar mensaje de error o realizar acciones adicionales si las fechas no son válidas
      console.error("No se puede obtener llamadas, corrige las fechas...");
    }
  };

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

        <LlamadasConEncuestas
          llamadas={llamadas}
          datosLlamada={datosLlamada}
          idLlamada={idLlamada}
          obtenerDatosLlamada={obtenerDatosLlamada}
        />
      </div>
    </div>
  );
};

export default ConsultarEncuesta;
