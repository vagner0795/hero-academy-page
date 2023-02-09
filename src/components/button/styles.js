import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 74px;
left: 35px;
top: 497px;
margin-top: ${ rest => rest.isBack ? '50px' : '45px'};
text-decoration: none;

background: ${ rest => rest.isBack ? 'transparent' : '#F2E205'};
border-radius: 14px;
border: ${rest => rest.isBack ? '1px solid #ffffff' : 'none'};

color:#ffffff;
font-weight: bold;
font-size: 17px;
line-height: 28px;
cursor: pointer;

display: flex;
justify-content: center;
align-items:center;
gap: 20px;

&:hover {
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

img{
    transform: ${rest => rest.isBack ? 'rotateY(180deg)' : '' } ;
}

@media (max-width: 600px) {

width: 100%;
height: 50px;
margin-top: 70px;
    
  }

`;