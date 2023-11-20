import React,{Component} from "react";
import { keyframes, styled } from "styled-components";
import './variables.css'

class EstilosConStyled extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }


    render() { 

        const fondoTexto={
            color:'yellow'
        }
        const animaText=keyframes`
        from{
            color:green
        }
        to{
            color:red
        }
        `
        const Titulo= styled.h1` 
        color: green;
        font-size: 29px ;
        text-align: center;
        background-color:${fondoTexto.color};
        &:hover{
            color:orangered;
        }
        @media(min-width: 800px){
            color:transparent;
        }
        animation: ${animaText} 2s linear infinite;
        `
        
        const Cabecera=styled.header`
        height:var(--altoHeader);
        background-color: var(--colorHeader);
        width: var(--anchoHeader)
        `
        return ( <>
        <Cabecera>
            <Titulo>
                Estamos en el Styled
            </Titulo>
        </Cabecera>
        </> );
    }
}
 
export default EstilosConStyled;