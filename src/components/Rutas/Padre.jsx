import React from "react";
import Componente1 from "./Componente1"
import Componente2 from "./Componente2"
import Componente3 from "./Componente3"
import { BrowserRouter, Route, Link, Switch, Routes, NavLink } from "react-router-dom";
import './Padre.css'
import RutasDinamicas from "./RutasDinamicas";
const Padre = () => {
    return (
        <>
            <BrowserRouter>
                <Routes >
                    <Route exact ospath="/" Component={Componente1} />
                    <Route sensitive path="/pagina2" Component={Componente2} />
                    <Route path="/pagina3" Component={Componente3} />
                    <Route path="/pagina4" Component={() => <h2> Hola estamos en el componente 4</h2>} />


                    <Route path="/users/:id" Component={RutasDinamicas}>
                    <Route path="/*">
                        {/* <Redirect to='/'></Redirect> */}
                         </Route>
                    </Route>
                </Routes>
                {/* <NavLink activeStyle={{ color: 'yellow' }} to='pagina2' > Ir a pagina 2</NavLink>
                <br />
                <NavLink activeClassName='estiloLinkActivo' to='pagina3'> Ir a pagina 3</NavLink> */}




            </BrowserRouter>

        </>
    );
}

export default Padre;