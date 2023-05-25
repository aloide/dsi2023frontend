//import React from 'react'
import "./Parallax.css";

const Parallax = () => {
  return (
    <div>
      <div className="parallax"></div>

      <div className="parallax-body">
        Una empresa que responde consultas de clientes una tarjeta de crédito ha
        decidido implementar un sistema IVR para responderlas vía llamadas
        telefónicas. Dicho sistema debe estar preparado para establecer la
        comunicación con los teléfonos fijos y celulares desde los que se
        realizan los llamados. Únicamente se trabajará con líneas y teléfonos
        digitales. <br />  Para esto solicitó a un proveedor el desarrollo del software
        que dé soporte a los procesos de negocio para responder a las consultas
        de llamadas de la tarjeta de crédito mediante respuestas interactivas
        automáticas definidas para un flujo de comunicación, y registrando las
        llamadas recibidas. En los casos en que sea necesario también se debe
        permitir a un Operador tomar una llamada para dar una respuesta al
        cliente

        <div className="botones">
          <a className="btn btn-primary" href="/ConsultarEncuesta">Consultar Encuesta</a>
          <button className="btn btn-primary"disabled>Otro caso de uso</button>
          <button className="btn btn-primary"disabled>Otro caso de uso</button>


        </div>

      </div>
    </div>
  );
};

export default Parallax;
