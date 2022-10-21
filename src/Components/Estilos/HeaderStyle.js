import styled  from "styled-components";
import { Link} from "react-router-dom";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  
}
`;


 export const Header = styled.header `
 `


 export const Nav = styled.header`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 320px) and (max-width: 800px) {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
  
  
  }
 
`

export const Ul = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color:black;
  @media only screen and (min-width: 320px) and (max-width: 800px) {
    display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  background-color:red;
  }
`

export const Li = styled.header``

export const LinkS = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 600;


  &:hover {
    color: gray;
    cursor: pointer;
    font-weight:bolder;
  }
  @media only screen and (min-width: 320px) and (max-width: 800px) {
    text-decoration: none;
    color: black;
    font-weight: 600;
  



  }

`

export const ContainerHome = styled.div`

`

export const H1 =styled.h1`
font-family: "Helvetica", sans-serif;
  letter-spacing: 0.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 40px;
  height: 70vh;
  @media only screen and (min-width: 320px) and (max-width: 800px) {
    font-family: "Helvetica", sans-serif;
  letter-spacing: 0.1 vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 5vh;
  height: 30vh;
  }
`

export const MyPhoto =styled.img`
width:100%
`

export const MyPhototwo =styled.img`
position: absolute;
top: 28vh;
left: 65px;
width: 15vw;
border-radius: 50%;
@media only screen and (min-width: 320px) and (max-width: 800px) {
position: absolute;
top: 10vh;
left: 45vw;
width: 9vw;
border-radius: 50%;
}
`


export const Box =styled.div`
position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  height: 8vh;
  top: 60vh;
  left: 40%;
  @media only screen and (min-width: 320px) and (max-width: 800px) {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
  height: 8vh;
  top: 30vh;
  left: 35%;
  }
`


export const Image = styled.img`
display: flex;
width: 100%;
height: 7vh;
@media only screen and (min-width: 320px) and (max-width: 800px) {
display: flex;
width: 100%;
height: 5vh;
}


`