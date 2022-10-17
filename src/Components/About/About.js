import React from "react";
import * as S from "../Estilos/AboutStyle";
import Casamento from "../Assets/Casamento.jpg";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  
}
`;


export default function About() {
    return(
        <S.Container>
            <S.Div>
<S.H1>Bem vindo ao Meu Mundo</S.H1>
<S.P>Olá, sou nascido e criado na cidade de Duque de Caxias, RJ. Tenho 24 anos, sou formado em técnico de administração e atualmente faço faculdade de Sistemas na Estácio.</S.P>
<S.MyCam src={Casamento} alt="I am"/>

            </S.Div>
        </S.Container>

    );
}
