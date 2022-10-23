import React from "react";
import Header from "./Components/Cabeçalho/Header";
import * as S from "./Components/Estilos/HeaderStyle";



export default function App() {
  return (
    <div>
      <S.GlobalStyle />
      <Header link1="Home" link2="About" link3="Works" link4="Ods"/>
         
    </div>
  );
}