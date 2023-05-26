import { useState } from "react";
import DatePicker from "react-datepicker";
import LlamadasConEncuestas from "../components/LlamadasConEncuestas/LlamadasConEncuestas";

import "react-datepicker/dist/react-datepicker.css";
import "./ConsultarEncuesta.css";
import DatosDeLlamadas from "../components/DatosDeLlamadas/DatosDeLlamadas";

const ConsultarEncuesta = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  return (
    <div className="form-principal">
      <div className="form-group">
        <h3>Indicar Periodo</h3>
        <label>Fecha de inicio</label>
        <DatePicker dateFormat={"dd/MM/yyyy"} selected={startDate} onChange={(date) => setStartDate(date)} />

        <label>Fecha de fin
        <DatePicker dateFormat={"dd/MM/yyyy"} selected={endDate} onChange={(date) => setEndDate(date)} />
        </label>

        <button>Buscar llamadas</button>

        <LlamadasConEncuestas />

        <DatosDeLlamadas />

      </div>
    </div>
  );
};

export default ConsultarEncuesta;
