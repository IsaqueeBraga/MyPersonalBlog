import React from "react";
import Header from "./Components/Cabeçalho/Header";
import * as S from "./Components/Estilos/HeaderStyle";
import Home from "./Components/Cabeçalho/Home";


export default function App() {
  return (
    <div>
      <S.GlobalStyle />
      <Header link1="About" link2="Works" link3="Ods" />
      <Home/>
      
    </div>
  );
}
