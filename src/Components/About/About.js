import React from "react";
import * as S from "../Estilos/AboutStyle";
import Eu from "../Assets/Angra dos Reis.jpg";
import Familia from "../Assets/Familia.jpg";
import Mozao from "../Assets/Mozao e eu.jpg";
import Best from "../Assets/Minha Best.jpg";
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
<S.H1>Welcome to My World</S.H1>
<S.P>Hello, I am born and raised in the city of Duque de Caxias, RJ. I am 24 years old, I have a degree in administration technician and I am currently studying Systems at Estácio.</S.P>
<S.MyCam src={Eu} alt="I am"/>
            </S.Div>
            <S.Box>
          <S.Image src={Familia} />
          <S.Image src={Mozao} />
          <S.Image src={Best} />
      </S.Box>
        </S.Container>
   
    );
}