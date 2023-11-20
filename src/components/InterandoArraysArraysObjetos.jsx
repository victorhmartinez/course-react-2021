import React from "react";
const IterandoArraysArraysObjectos = () => {
    const animales = ["Perro", "Gallina", "Leon", "Camaleon"]
    const Personas = [
        {
            id: 1,
            nombre: "Ana",
            cargo: "Limpiadora"
        },
        {
            id: 2,
            nombre: "Maria",
            cargo: "Cocinera"
        },
        {
            id: 3,
            nombre: "Carlos",
            cargo: "Conserje"
        },
    ]
    return (
        <>
            <ul>
                {animales.map(animal => (
                    <li>{animal}</li>
                ))}
            </ul>
            <ul>
                {Personas.map(persona => (
                    <li key={persona.id}>
                        ID:   {persona.id} <br />
                        Nombre:   {persona.nombre} <br />
                        Cargo:   {persona.cargo}
                    </li>
                ))}
            </ul>
        </>


    );
}

export default IterandoArraysArraysObjectos;