import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState } from 'react';
// // import { useCounrt } from './components/hooks/useCounrt';
// import Padre from './components/Rutas/Padre';
// import Axios from './components/Axios';
// import Formularios from './components/Formularios';
//import EstilosEnLinea from './components/EstilosEnLinea';
// import EstilosTradicionales from './components/EstilosTradicionales';
//import States from './components/States.jsx';
//import PrimerComponente from './components/PrimerComponente.jsx';
//import Props from './components/Props.jsx';
//import EstilosEnModulo from './components/EstilosEnModulo';
//import EstilosConStyled from './components/EstilosConStyled';
// import CicloVidaComponentes from './components/CicloVidaComponentes'
// import Refs from './components/Refs';
// import Hook from './components/Hooks';
// import Eventos from './components/Eventos'
// import RenderizadoCondicional from './components/RenderizadoCondicional'
// import SpreadOperator from './components/SpreadOperator';
// import IterandoArraysArraysObjectos from './components/InterandoArraysArraysObjetos';
// import IterandoKeys from './components/IterandoKeys';
// import ComunicacionComponentes1 from './components/ComunicacionComponente1';
// import ComunicacionComponentes2 from './components/ComunicacionComponentes2';
// import Padre from './components/IterandoComponentes/Padre';
// import Fetch from './components/Fetch';
// import UserProvider from './components/Contexts/UserContext';
// import ListaUsuarios from './components/ListUsuarios';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Contador from './components/Contador.jsx';
function App() {
  // const lista = ['pera ', 'mazana ', 'uva ']
  // const [estado,setEstado]=useState(false);
  // const estadoComponente=()=>{
  //   setEstado(true);
  // }
  // const hijoLlamaPadre=()=>{
  //   console.log("Llamando a padre desde el componente hijo")
  // }
  // const llamanadoAHermano=()=>{
  //   setEstado(true)
  // }
  // const [contador] = useCounrt(0);

  return (
    <>
      {/* <PrimerComponente/> */}
      {/* <Props frutas={lista}/> */}
      {/* <States /> */}
      {/* <EstilosTradicionales></EstilosTradicionales> */}
      {/*<EstilosEnLinea/> */}

      {/* <EstilosEnModulo /> */}
      {/* <EstilosConStyled/> */}

      {/* <Refs /> */}
      {/* <CicloVidaComponentes /> */}
      {/* <Hook/> */}
      {/* <Formularios/> */}
      {/* < Eventos/> */}
      {/* < RenderizadoCondicional/> */}
      {/* <SpreadOperator/> */}
      {/* <IterandoArraysArraysObjectos/> */}
      {/* <IterandoKeys/> */}
      {/* <Padre/> */}
      {/* < ComunicacionComponentes1 llamaHermano={llamanadoAHermano} llamaPadre={hijoLlamaPadre} cambioEstado={estado}/>
  <button onClick={estadoComponente}>Pulsa</button>
  <ComunicacionComponentes2 nuevoEstado={estado}/> */}
      {/* < Fetch/> */}
      {/* <Axios/> */}
      {/* <Padre/> */}
      {/* <h1>{contador}</h1> */}
      {/* <UserProvider> 
    <ListaUsuarios/>
   </UserProvider>*/}
      <Provider store={store}>
        <Contador />
      </Provider>

    </>

  );
}

export default App;
