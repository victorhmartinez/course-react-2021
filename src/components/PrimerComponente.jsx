import { Component } from "react";
import React from "react";
class PrimerComponente extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <>
            <h1>Hola mundo desde primer Componente</h1>        
        </> 
        );
    }
}
 
export default PrimerComponente;