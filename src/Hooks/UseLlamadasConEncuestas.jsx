import { useEffect, useState } from "react";
import axios from "axios";

const useLlamadasConEncuestas = (startDate, endDate) => {
  const [llamadas, setLlamadas] = useState([]);
  const [datosLlamada, setDatosLlamada] = useState({});
  const [idLlamada, setIdLlamada] = useState(1);

 const fetchLlamadas = async (fechaDesde, fechaHasta)=>{
  const urlApi = "http://localhost:27015/api/llamadas-cn-encuesta-resp";
      try {
        const resp = await axios.post(urlApi, {
          
            fechaDesde: fechaDesde.toISOString(),
            fechaHasta: fechaHasta.toISOString()
          
        });
        return(resp.data);
      } catch (error) {
        console.error(error);
      }
 }


 const fetchDatosLlamada = async (id)=>{
  const urlApi = `http://localhost:27015/api/llamada/${idLlamada}`;
  try {
        const resp = await axios.get(urlApi);
        return(resp.data);
      } catch (error) {
        console.error(error);
      }
 }

  const obtenerDatosLlamada = async (id) => {
    setIdLlamada(id);
    
  };

  return {  obtenerDatosLlamada, fetchLlamadas , fetchDatosLlamada};
};

export default useLlamadasConEncuestas;
