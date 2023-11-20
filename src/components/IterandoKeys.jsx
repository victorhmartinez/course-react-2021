import React from "react";
const IterandoKeys = () => {
   const objetos={
    animal:'Perro',
    persona:'Maria',
    malla:'Cuadors',
    color:'Azul'
   }
   const key= Object.keys(objetos);
    return ( 
    <>
    <ul>
        {key.map(k=>(
            <li>{k}: {objetos[k]}</li>
        ))}
    </ul>
    </> 
    );
}
 
export default IterandoKeys;