import './LlamadasConEncuestas.css'

const LlamadasConEncuestas = () => {
  return (
    <div id="LlamadasConEncuestas">
      <h3>Llamadas con Encuestas </h3>

        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Invoice ID</th>
                    <th>Date</th>
                </tr>    
            </thead>
            <tbody>
                <tr>
                    <td>ID-456654</td>
                    <td>14/02/2023</td>
                </tr>
                <tr>
                    <td>ID-87978</td>
                    <td>13/02/2023</td>
                </tr>
            </tbody>
        </table>

    </div>
  );
};

export default LlamadasConEncuestas;
