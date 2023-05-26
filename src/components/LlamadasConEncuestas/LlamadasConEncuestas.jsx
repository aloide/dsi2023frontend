import React, { useEffect, useState } from 'react';
import './LlamadasConEncuestas.css'
import axios from 'axios';

const LlamadasConEncuestas = () => {

    const [llamadas, setLlamadas] = useState([])

    useEffect(()=>{
        const obtenerLlamadas = async ()=>{
            const urlApi = "http://rovtest01.ddns.net:27015/api/llamadas-cn-encuesta-resp"

            await axios.get(urlApi).then((response)=>{console.log(response)})




        }
        obtenerLlamadas()
    }, [])



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
