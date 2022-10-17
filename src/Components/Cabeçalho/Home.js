import React from "react";
import * as S from "../Estilos/HeaderStyle";
import { createGlobalStyle } from "styled-components";
import Torcida from "../Assets/Torcida do Flamengo.png";
import Tiroles from "../Assets/Tiroles.jpg";
import GitHub from "../Assets/Git hub.png";
import Instagram from "../Assets/Instagram.png";
import Twitter from "../Assets/Twitter.png";


export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  
}
`;
export default function Home() {
    return(
        <main>
        <S.ContainerHome>
        <S.H1> ISAQUE BRAGA, 24, RJ. </S.H1>
        <S.MyPhoto src={Torcida} alt="Mengao"/>
        <S.MyPhototwo src={Tiroles} alt="Melhor amigo"/>
        </S.ContainerHome>
        
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
        </main>
    );
}