import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/banner-home.png";
import Arrow from "../../assets/arrow.svg";
import { H1 } from "../../components/title/styles";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/button";

import { Container, Image, InputLabel, Input } from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const history = useHistory();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/order", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    history.push("/users");
  }

  return (
    <Container>
      <Image alt="logo" src={Logo} />

      <ContainerItens>
        <H1>Bem-Vindo Herói</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
