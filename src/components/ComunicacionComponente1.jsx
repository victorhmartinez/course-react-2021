import React from "react";
 
const ComunicacionComponentes1 = (props) => {
if(props.cambioEstado===true){
    console.log('El estado esta verdadero')
}
const llamandoAlPadre=()=>{
    props.llamaPadre()
}
const llamanadoHermano=()=>{
    props.llamaHermano();
}
    return (  
        <>
        <button onClick={llamandoAlPadre}>Llamar padre</button>
        <button onClick={llamanadoHermano}>Llamar al hermano</button>
        </>
    );
}
 
export default ComunicacionComponentes1;