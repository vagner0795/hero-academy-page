import styled from "styled-components"
import Background from '../../assets/image-home.png'


export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

@media (max-width: 600px) {

background-position: center;
  }
`;

export const Image = styled.img`
margin-top: 40px;
width: 300px;

@media (max-width: 600px) {

width: 200px;
    
  }
`;

export const InputLabel = styled.p`
letter-spacing: -0.408px;
font-weight: bold;
font-size: 20px;
line-height: 22px;
color: #eeeeee;
margin-left: 25px;

@media (max-width: 600px) {

font-size: 16px;
    
  }



`;

export const Input = styled.input`
background: #73ECCB;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;
padding-left:25px;
font-size: 23px;
line-height: 28px;
color: #ffffff;
margin-bottom: 34px;

@media (max-width: 600px) {

width: 100%;
font-size: 16px;
height: 50px;
    
  }


`;



