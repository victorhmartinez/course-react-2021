import React,{createRef} from "react";



const Refs = () => {
    const cambioColor=createRef();
    const cambioColorTexto=()=>{
        cambioColor.current.style.color='blue';
    }
    return (
    <>
    <h1 ref={cambioColor}> soy un titulo y cmabio de color</h1>
    <button onClick={cambioColorTexto}>Cambia de color</button>
    </>
    );
}

export default Refs;