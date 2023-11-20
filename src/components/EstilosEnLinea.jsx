import React,{Component} from "react";
class EstilosEnLinea extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        const age=39;
        const titulo={
            textAlign:'center',
            color:'green',
            backgroundColor:age>=37?'red':'orangered'
        }
        return (
            <>
            <h1 style={titulo}>Soy un Titulo</h1>
            </>

        );
    }
}

export default EstilosEnLinea;