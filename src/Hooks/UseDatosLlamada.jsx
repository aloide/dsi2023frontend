/* eslint-disable react/prop-types */
import "./UseDatosLlamada.css";

const tbdoyDatosEncuesta = (datosLlamada) => {
  //console.log(datosLlamada);
  const body = [];
  if(!datosLlamada )return body;
  datosLlamada.map(dll => {
    body.push(
      // posible error por falta de key en tr
      //<tr key="">
      <tr>
        <td>{dll.descPregunta}</td>
        <td>{dll.descRespuesta}</td>
      </tr>
    )
  })
  return body;
};

const UseDatosLlamada = (props) => {

  console.warn(props);

  const {cliente, estadoActual, duracion, descEncuesta} = props;

  
  return (
    <div className="datosLlamada">
      <div className="row">
        <label className="dato">Cliente: </label>
        <div className="valor">{cliente}</div>
      </div>
      <div className="row">
        <label className="dato">Estado inicial: </label>
        <div className="valor">{estadoActual}</div>
      </div>
      <div className="row">
        <label className="dato">Duracion: </label>
        <div className="valor">{duracion}</div>
      </div>
      <div className="row">
        <label className="dato">Descripcion Encuesta </label>
        <div className="valor">{descEncuesta}</div>
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
            {tbdoyDatosEncuesta(props.respuestas)}

          </tbody>
        </table>

      </div>
    </div>
  );
};

export default UseDatosLlamada;
