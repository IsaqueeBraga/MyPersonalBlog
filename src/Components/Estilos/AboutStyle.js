import styled  from "styled-components";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  
}
`;


export const Container =styled.section`
  height: 173vh;
  display: flex;
  justify-content: center;
  background-color:black;
  border:solid;

  @media only screen and (min-width: 320px) and (max-width: 800px) {
    height: 136vh;
    display: flex;
    justify-content: center;
    background-color:black;
    border:solid;
  }
`


export const Div =styled.div`

`


export const Main =styled.main`
`

export const H1 =styled.h1`
font-family: "Gill Sans", sans-serif;
letter-spacing: 0.2vw;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
font-size: 3vw;
height: 30vh;
color:white;
@media only screen and (min-width: 320px) and (max-width: 800px) {
    font-family: "Gill Sans", sans-serif;
    letter-spacing: 0.1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 7vw;
    height: 30vh;
}
`


export const P =styled.p`
width:40vw;
bottom: -10vh;
padding: 8%;
align-items: center;
justify-content: center;
position: relative;
left: 25vw;
font-size: 1.5vw;
background-color: white;
color:black;
border-radius: 40%;
flex-direction:column;
@media only screen and (min-width: 320px) and (max-width: 800px) {
    width:50vw;
    bottom: -10vh;
    padding: 8%;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 34vw;
    font-size: 2vw;
    background-color: white;
    color:black;
    flex-direction:column;  
    border-radius: 40%;

}

`

export const MyCam =styled.img`
width: 30vw;
position: absolute;
top: 40vh;
left: 5vw;
border-radius:10px;
@media only screen and (min-width: 320px) and (max-width: 800px) {
    width: 40vw;
    position: absolute;
    top: 44vh;
    left: 3vw;
    border-radius:10px;   
}

`


export const Box = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  height: 8vh;
  top: 140vh;
  left: 43%;
  @media only screen and (min-width: 320px) and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 8vh;
    top: 110vh;
    left: 45%;
  }
  `


  export const Image = styled.img`
  display: flex;
  width: 40vw;
  height: 70vh;
  border-radius:10px;
  @media only screen and (min-width: 320px) and (max-width: 800px) {
    display: flex;
  width: 30vw;
  height: 50vh;
  border-radius:15px;
  }
  `




