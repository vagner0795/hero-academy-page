import styled from "styled-components";

export const ContainerItens = styled.div`
  background-color: #14918e;

  border-radius: 61px 61px 0 0;

  padding: 50px 36px;

  display: flex;
  flex-direction: column;

  height: 90vh;

  ${(props) =>
    props.isBlur &&
    `

    backdrop-filter: blur(45px);
    min-height: calc(100vh-170px)

    @media (max-width: 600px) {
    height: 100vh;
    width: 80%;
  }

`}

  @media (max-width: 600px) {
    height: 100vh;
    width: 80%;
  }
`;
