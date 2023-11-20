import React from "react";
import Hijo from "./Hijo";


const Padre = () => {
    const personas=['Alejandro','Pedro','Sandro','Dayanaa']
    return ( 
        <>
        <ul>
            {personas.map(persona=>(
               < Hijo personaLista={persona }/>
            ))}
        </ul>
        </>
     );
}
 
export default Padre;