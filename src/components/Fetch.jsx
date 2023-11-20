import React, { useState, useEffect } from "react";
const Fetch = () => {
  const[users,setUser]=useState([]);
useEffect(()=>{
  const cargarUsuarios=async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users' );
    const data= await res.json();
    setUser(data);
    console.log(data)
  }
  cargarUsuarios();
},[])
  return (
        <>
     <ul>
    {
      users.map(user=>(
        <li key={user.id}>
          Nombre: {user.name}
          <br />
          Usuario: {user.username}
          <br />
          Correo: {user.email}
          <br />
          Sitio web: {user.website}
        </li>
      ))
    }
     </ul>
        </>
      );
}
 
export default Fetch;