import React,{useContext} from "react";
import { UserContext } from "./Contexts/UserContext";
const ListaUsuarios = () => {
    const {users}= useContext(UserContext); 
   
    const usuarios = users.data;
   
   return (  <>
    <ul >
{usuarios.map(usuario=>(
    <li key={usuario.id}>
        {usuario.name} <br />
        {usuario.id} <br />
        {usuario.email} <br />
    </li>
))}
    </ul>
    </>
    );
}
 
export default ListaUsuarios;