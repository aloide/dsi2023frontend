import "./UseDatosLlamada.css";

const UseDatosLlamada = (props) => {
  if (!props && !props.llamada) return <></>;

  const tbdoyDatosEncuesta = (r) => {
    console.log(r);
    const body = [];
    if (r) body.push(<p>a</p>);
    return body;
  };
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
      <div className="row">
        <label className="dato">Duracion: </label>
        <div className="valor">{props.llamada.duracion}</div>
      </div>
      <div className="row">
        <label className="dato">Descripcion Encuesta </label>
        <div className="valor">{props.llamada.descEncuesta}</div>
      </div>
      <div>
        <h3>Respuestas:</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Pregunta</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UseDatosLlamada;
