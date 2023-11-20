import { createContext, useState, useEffect } from "react";
import axios from 'axios'
//Creamos context
export const UserContext = createContext()
//Creamos el provider
const UserProvider = (props) => {
    //Creamos el state de context
    const [users, setUser] = useState([])
    //Ejecutamos el pedido a la api
    useEffect(() => {
        const obtenerUsuarios= async ()=>{
            const url= 'https://jsonplaceholder.typicode.com/users';
            const usuarios= await axios(url);
            setUser(usuarios)
        }
        obtenerUsuarios()
    }, [])

    return(
        <UserContext.Provider value ={{users}}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserProvider