import React, { Component } from "react";


class States extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        names:"Alejandra",
        lastName:"Rodriguez"
    }
   CambiarDatos(){
    if(this.state.name==="Alejandra" && this.state.lastName==="Rodirguez")
        this.setState({names:"Victor",lastName:"Martinez"})
    else
        this.setState({names:"Alejandra",lastName:"Rodriguez"})
   }
    render() {
        return (
        <>
        
            <h2>
                Mi nombre es {this.state.names} {this.state.lastName}
            </h2>
            <button  onClick={this.CambiarDatos.bind(this)}>Presione</button>
        </>
        );
    }
}

export default States;