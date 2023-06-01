import axios from "axios";

/* eslint-disable react/prop-types */
const BtnDescargarCsv = (props) => {
  const {detalle} = props.detalle;

  console.warn(detalle);

  const urlApi = "http://localhost:27015/api/llamada-csv";

  const descargarCsv = async()=> {
    await axios.post(urlApi,{data: detalle})
  }

  return (
    <div>
      <button onClick={descargarCsv}>
        Descargar CSV
      </button>
    </div>
  );
};

export default BtnDescargarCsv;
