import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  
}
`;


export const Container =styled.section`
display: flex;
 height:203vh;
 flex-direction:column;
 background-color:black;
 @media only screen and (min-width: 320px) and (max-width: 800px) {
    display: flex;
    height:160vh;
    flex-direction:column;
    background-color:black;
 }
`


export const Div =styled.div`

`

export const H1 =styled.h1`
letter-spacing: 0.1vw;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
font-size: 3vw;
height: 30vh;
font-family: "Gill Sans", sans-serif;
color:white;
@media only screen and (min-width: 320px) and (max-width: 800px) {
    letter-spacing: 0.1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 7vw;
    height: 22vh;
    font-family: "Gill Sans", sans-serif;
    color:white;  
}

`

export const H2 =styled.h2`
display: flex;
justify-content: center;
font-size: 1.5vw;
width: 75%;
font-family: "Helvetica", sans-serif;
color:white;
@media only screen and (min-width: 320px) and (max-width: 800px) {
display: flex;
justify-content: center;
font-size: 2vw;
width: 75%;
font-family: "Helvetica", sans-serif;
color:white;
}
`


export const SecTwo =styled.section`
display: flex;
flex-wrap:wrap;
justify-content:space-evenly;
height: 100vh;
@media only screen and (min-width: 320px) and (max-width: 800px) {
 display: flex;
flex-wrap:wrap;
justify-content:space-evenly;
height: 100vh;
}
`


export const Card =styled.div`
border:transparent;
display: flex;
flex-direction:column;
border-radius:10px; 
width:25vw;
height:36vw;
@media only screen and (min-width: 320px) and (max-width: 800px) {
    border:transparent;
    display: flex;
    flex-direction:column;
    border-radius:10px; 
    width:25vw;
    height: 30vw; 
}

`

export const Image =styled.img`
border-radius: 5px;
width:100%;
@media only screen and (min-width: 320px) and (max-width: 800px) {
    border-radius: 10px;
    width:100%vw;  
}
`

export const DivThree =styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
font-family: "Helvética";
background-color:gray;
color:white;
border-radius: 5px;
@media only screen and (min-width: 320px) and (max-width: 800px) {
 display: flex;
justify-content: space-evenly;
width: 100%;
font-family: "Helvética";
background-color:gray;
color:white;
border-radius: 5px;
font-size: 1vw;

}



`

export const CardHtml = styled.p`
`



export const CardCss = styled.p`
`


export const Text = styled.p`
display: flex;
padding: 0.1vw;
text-align:justify;
color:white;
@media only screen and (min-width: 320px) and (max-width: 800px) {
    display: flex;
    padding: 0.1vw;
    text-align:justify;
    color:white;
    font-size: 2vw;
  
}
`



export const Box =styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: space-evenly;
width: 8vw;
height: 1vh;
top: 195vh;
left: 45%;
@media only screen and (min-width: 320px) and (max-width: 800px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 8vw;
    height: 1vh;
    top: 150vh;
    left: 45%;  
}
`


export const ImageFive =styled.img`
display: flex;
width: 100%;
height: 6vh;
border-radius: 50%;
@media only screen and (min-width: 320px) and (max-width: 800px) {
    display: flex;
    width: 100%;
    height: 6vh;
    border-radius: 60%;
}
`





