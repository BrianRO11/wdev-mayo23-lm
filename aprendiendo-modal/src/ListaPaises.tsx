import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';

const ListaPaises = () =>
{
    const [paises, setPaises] = useState<any[]>([]);   

    useEffect(()=>{
        const obtenerApiPaises = async () =>
        {
            try
            {
                const respuesta = await axios.get("https://restcountries.com/v3.1/all");
                const paisesOrdenados = respuesta.data.sort((a: any , b: any) => {
                    const paisA = a.name.common.toUpperCase();
                    const paisB = b.name.common.toUpperCase();

                    if(paisA < paisB)
                        return -1;
                    if(paisA >paisB)
                        return 1;

                    return 0;
                });               
                
                setPaises(paisesOrdenados);
            }
            catch(error)
            {
                console.log("Hubo un error", error);
            }
        }

        obtenerApiPaises();
    },[]);

    return (<div>
        <h1>Consumiendo un api en react</h1>
        <Form.Select>
            {paises.map((pais) =>(
                <option key={pais.cca2}>
                    {pais.name.common}
                </option>
            ))}
        </Form.Select>
    </div>)
}


export default ListaPaises;