import styled from "styled-components";
import Background from "../../assets/image-user.png";

export const Container = styled.div`
background: url("${Background}");
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
  width: 350px;

  @media (max-width: 600px) {

width: 250px;
    
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 58px;
  border: none;
  outline: none;
  padding-left: 25px;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 34px;
  margin-top: 20px;

  p {
    font-size: 20px;
    font-weight: 28px;
    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 600px) {

width: 100%;
    
  }
`;
