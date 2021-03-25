import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "../../components/Input";

import {
  Container,
  Content,
  LoginCard,
  Title,
  SubmitButton,
  Banner,
} from "./styles";

type DataType = { username: string; password: string };
const Login: React.FC = () => {
  const [data, setData] = useState<DataType>({ username: "", password: "" });
  const router = useHistory();

  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent) => {
    e.preventDefault();
    if (!data.password || !data.username) {
      alert("Preencha todos os dados do formulário");
    } else {
      alert(`Bem vindo ${data.username}`);
      router.push("/home");
    }
  };

  const inputHandler = (key: keyof DataType) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setData((state) => ({
      ...state,
      [key]: e?.target.value,
    }));
  };

  return (
    <Container>
      <Banner />
      <Content>
        <LoginCard>
          <Title>Entre para o lado negro da força</Title>
          <Input
            onChange={inputHandler("username")}
            placeholder="Insira o User Name"
            label="Username"
          />
          <Input
            onKeyPress={e => e.key === 'Enter' && handleSubmitClick(e)}
            type="password"
            onChange={inputHandler("password")}
            placeholder="Insira a Senha"
            label="Senha"
          />
          <SubmitButton onClick={handleSubmitClick}>ENTRAR</SubmitButton>
        </LoginCard>
      </Content>
    </Container>
  );
};

export default Login;
