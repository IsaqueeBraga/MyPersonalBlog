import React from "react";
import * as S from "../Estilos/OdsStyle";
import Agua from "../Assets/6 Agua potavel.png";


export default function Onu() {
    return(
        <S.ContainerOds>
             <S.H1>
        Melhorias promovidas no meu bairro (Parque Felicidade, Duque de Caxias, RJ), afim de atingir um
        objetivo de desenvolvimento sustentavel da Onu
      </S.H1>
      <S.Ancora
        href="https://aguasdorio.com.br/obras-de-implantacao-de-redes-chegam-para-realizar-o-sonho-da-agua-tratada-nas-torneiras-em-duque-de-caxias/"
        target="blank"
      >
        <S.Img
          src={Agua}
          alt="agua potavel e saneamento"
        />
        
      </S.Ancora>
             </S.ContainerOds>
    )
}