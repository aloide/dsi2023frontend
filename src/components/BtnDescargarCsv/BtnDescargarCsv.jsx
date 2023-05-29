/* eslint-disable react/prop-types */
const BtnDescargarCsv = (props) => {
  const {id} = props.id;

  return (
    <div>
      <a className="btn btn-primary"
      href={`http://rovtest01.ddns.net:27015/api/llamada-csv/${id}`}>
        Descargar CSV
      </a>
    </div>
  );
};

export default BtnDescargarCsv;
