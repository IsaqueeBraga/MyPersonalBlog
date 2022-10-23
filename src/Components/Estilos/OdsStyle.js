import styled from "styled-components";


export const Img = styled.img`
position: absolute;
  width: 25vw;
  top:  30vw;
  left: 40vw;
  @media only screen and (min-width: 320px) and (max-width: 800px) {
    width: 40vw;
    top: 45vw;
    left: 30vw;

  }
`

export const H1 = styled.h1`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
font-size: 2vw;
height: 40vh;
font-family: "Gill Sans", sans-serif;
@media only screen and (min-width: 320px) and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 3vw;
    height: 40vh;
    font-family: "Gill Sans", sans-serif;
}
`

export const ContainerOds = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color:orange;
  height:180vh
  
`
export const Ancora =styled.a`
`
