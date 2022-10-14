import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as S from "../Estilos/HeaderStyle";
import About from "../About/About";
import Works from "../Works/Works";
import Ods from "../Ods/Ods";
import Torcida from "../Assets/Torcida do Flamengo.png";
import Tiroles from "../Assets/Tiroles.jpg";
import GitHub from "../Assets/Git hub.png";
import Instagram from "../Assets/Instagram.png";
import Twitter from "../Assets/Twitter.png";


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
      <main>
      <S.ContainerHome>
      <S.H1> ISAQUE BRAGA, 24, RJ. </S.H1>
      <S.MyPhoto src={Torcida} alt="Mengao"/>
      <S.MyPhototwo src={Tiroles} alt="Melhor amigo"/>
      </S.ContainerHome>
      </main>
      <S.Box>
        <a href="https://twitter.com/Isaquecrf_/">
          <S.Image src={Twitter} />
        </a>
        <a href="https://www.instagram.com/tchalla/">
          <S.Image src={Instagram} />
        </a>
        <a href="https://github.com/IsaqueeBraga/">
          <S.Image src={GitHub} />
        </a>
      </S.Box>
    </BrowserRouter>
);




}
