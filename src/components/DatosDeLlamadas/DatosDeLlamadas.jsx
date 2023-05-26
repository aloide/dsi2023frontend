import "./DatosDeLlamadas.css";

const DatosDeLlamadas = () => {
  return (
    <div>
      <h3>Datos de la llamada</h3>
      <div className="container">
        <div className="row">
          <label htmlFor="">ID de llamada:</label>
          <p>ID-456654	</p>
        </div>
        <div className="row">
          <label htmlFor="">Fecha de inicio: </label>
          <p>14/02/2023	</p>
        </div>
        <div className="row">
          <label htmlFor="">Estado</label>
          <p>Finalizada</p>
        </div>
      </div>
    </div>
  );
};

export default DatosDeLlamadas;
