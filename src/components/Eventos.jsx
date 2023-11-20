import React from "react";

const Eventos = () => {
/*onFocus (Cuando  un input esta activado  o en foco) 
onBlur(Cuando pulsamos fuera del input que esta en el foco)
onChange (Cuando hay un cambio en el componente o input)
onClick (Cuando se hace click en el raton sobre el elemento)
onDoubleClick( Cuando se hace click  en el raton sobre el elemento(nativamente))
onDown(Cuando pulsamos un bton  del te lado)
onKeyPress(Cuando presionamos una tecla)'
onMouseDown (Cuando presionamos el boton  del mouse hacia abajo)
onMouseOver(Cuando pasamos el mouse por encima)
onMouseLeave(Cuando salimos del elemento)

*/
const foco =()=> console.log('Estoy en foco')
const blur =()=> console.log('Estoy fuera de foco')
const change =()=> console.log('He realizado un cambio')
const clicked =()=> console.log('Me han clickeado')
const doubleClicked =()=> console.log('Me han clickeado doble')

return ( 
        <>
       <form >
        <input onFocus={foco} 
        onBlur={blur}   
        onChange={change}
        type="text" />
      

       </form>
       <button 
        onClick={clicked}
        onDoubleClick={doubleClicked}>
            Pulsame
        </button>
          </>
     );
}
 
export default Eventos;