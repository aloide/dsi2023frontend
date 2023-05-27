import "./UseDatosLlamada.css";

const UseDatosLlamada = (props) => {
  return (
    <div className="datosLlamada">
      <div className="row">
        <label className="dato">Cliente: </label>
        <div className="valor">{props.llamada.cliente}</div>
      </div>
      <div className="row">
        <label className="dato">Estado inicial: </label>
        <div className="valor">{props.llamada.estadoActual}</div>
      </div>
    </div>
  );
};

export default UseDatosLlamada;
