import { useEffect, useState } from "react";
import axios from "axios";

const useLlamadasConEncuestas = (startDate, endDate) => {
  const [llamadas, setLlamadas] = useState([]);
  const [datosLlamada, setDatosLlamada] = useState({});
  const [idLlamada, setIdLlamada] = useState(1);

  useEffect(() => {
    const fetchLlamadas = async () => {
      const urlApi = "http://rovtest01.ddns.net:27015/api/llamadas-cn-encuesta-resp";

      try {
        const resp = await axios.get(urlApi, {
          params: {
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString()
          }
        });
        setLlamadas(resp.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLlamadas();
  }, [startDate, endDate]);

  const obtenerDatosLlamada = async (id) => {
    setIdLlamada(id);
    const urlApi = `http://rovtest01.ddns.net:27015/api/llamada/${id}`;

    try {
      const res = await axios.get(urlApi);
      setDatosLlamada(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { llamadas, datosLlamada, idLlamada, obtenerDatosLlamada };
};

export default useLlamadasConEncuestas;
