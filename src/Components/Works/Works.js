import React from "react";
import * as S from "../Estilos/WorkStyle";
import Beat from "../Assets/Beat.png";
import Finn from "../Assets/Finn.png";
import Cavaleiro from "../Assets/Cavaleiro da Lua.png";
import Crespo from "../Assets/Crespos.png";
import Html from "../Assets/Html.png";
import Css from "../Assets/Css.png";
import  Script from "../Assets/JavaScript.png";

export default function Works (){
    return(
    <S.Container>
    <S.Div>
    <S.H1>My Projects</S.H1>
    </S.Div>
    <S.SecTwo>
    <S.Card>
    <S.H2>Challenge Beat</S.H2>
    <a href="https://beat-33uxota4y-isaqueebraga.vercel.app/" target="_blank">
    <S.Image src={Beat} />
          </a>
          <S.DivThree>
             <S.CardHtml>HTML5</S.CardHtml>
                <S.CardCss>CSS3</S.CardCss>
                    </S.DivThree>
                    <S.Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
                        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
                        et Malorum" by Cicero are also reproduced in their exact original form, 
                        accompanied by English versions from the 1914 translation by H. Rackham.</S.Text>
    </S.Card>
    <S.Card>
    <S.H2>Challenge Finn</S.H2>
                    <a href="https://finn-isaqueebraga.vercel.app/" target="_blank">
                        <S.Image src={Finn} />
                    </a>
                    <S.DivThree>
                    <S.CardHtml>HTML5</S.CardHtml>
                    <S.CardCss>CSS3</S.CardCss>
                    </S.DivThree>
                    <S.Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
                        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
                        et Malorum" by Cicero are also reproduced in their exact original form, 
                        accompanied by English versions from the 1914 translation by H. Rackham.</S.Text>
               </S.Card>
               <S.Card>
               <S.H2>Challenge Knight</S.H2>
                    <a href="/" target="_blank">
                        <S.Image src={Cavaleiro} />
                    </a>
                    <S.DivThree>
                    <S.CardHtml>HTML5</S.CardHtml>
                    <S.CardCss>CSS3</S.CardCss>
                    </S.DivThree>
                    <S.Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
                        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
                        et Malorum" by Cicero are also reproduced in their exact original form, 
                        accompanied by English versions from the 1914 translation by H. Rackham.</S.Text>
               </S.Card>
               <S.Card>
               <S.H2>Challenge Curly</S.H2>
                    <a href="/" target="_blank">
                        <S.Image src={Crespo} />
                    </a>
                    <S.DivThree>
                    <S.CardHtml>HTML5</S.CardHtml>
                    <S.CardCss>CSS3</S.CardCss>
                    </S.DivThree>
                    <S.Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
                        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
                        et Malorum" by Cicero are also reproduced in their exact original form, 
                        accompanied by English versions from the 1914 translation by H. Rackham.</S.Text>
               </S.Card>
               <S.Box>
               <S.ImageFive src={Html} />
               <S.ImageFive src={Css} />
               <S.ImageFive src={Script} />
               </S.Box>

    </S.SecTwo>
    </S.Container>
    )
    }