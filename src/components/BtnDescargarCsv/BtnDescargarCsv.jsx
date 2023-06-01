import axios from "axios";

/* eslint-disable react/prop-types */
// const BtnDescargarCsv = (props) => {
//   const { detalle } = props.detalle;

//   console.warn(detalle);

//   const urlApi = "http://localhost:27015/api/llamada-csv";

//   const descargarCsv = async () => {
//     // await axios.post(urlApi,{data: detalle})
//     console.log("🚀 ~ file: BtnDescargarCsv.jsx:14 ~ descargarCsv ~ detalle:", detalle)

//     axios.post(urlApi, detalle, { responseType: 'blob' })
//       .then((response) => {
//         const file = new Blob([response.data], { type: 'application/octet-stream' });
//         const fileURL = URL.createObjectURL(file);

//         // Crear un enlace de descarga
//         const downloadLink = document.createElement('a');
//         downloadLink.href = fileURL;
//         downloadLink.download = 'archivo.csv'; // Nombre del archivo descargado
//         downloadLink.click();

//         // Liberar recursos
//         URL.revokeObjectURL(fileURL);
//       })
//       .catch((error) => {
//         console.error('Error al descargar el archivo', error);
//       });

//   }

//   return (
//     <div>
//       <button onClick={descargarCsv}>
//         Descargar CSV
//       </button>
//     </div>
//   );
// };
const BtnDescargarCsv = (props) => {
  const {id} = props.id;

  return (
    <div>
      <a className="btn btn-primary"
      href={`http://localhost:27015/api/llamada-csv/${id}`}>
        Descargar CSV
      </a>
    </div>
  );
};

export default BtnDescargarCsv;
