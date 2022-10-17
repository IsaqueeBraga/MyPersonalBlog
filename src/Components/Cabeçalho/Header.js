import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as S from "../Estilos/HeaderStyle";
import About from "../About/About";
import Works from "../Works/Works";
import Ods from "../Ods/Ods"
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  
}
`;
export default function Header({ link1, link2, link3 }) {
return(
<BrowserRouter>
      <S.Header>
        <S.Nav>
          <S.Ul>
            <S.Li>
              <S.LinkS to="/about">{link1}</S.LinkS>
            </S.Li>
            <S.Li>
              <S.LinkS to="/works">{link2}</S.LinkS>
            </S.Li>
            <S.Li>
              <S.LinkS to="/ods">{link3}</S.LinkS>
            </S.Li>
          </S.Ul>
        </S.Nav>
      </S.Header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/ods" element={<Ods />} />
      </Routes>
      
  
    </BrowserRouter>
);




}
