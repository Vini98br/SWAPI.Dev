import React from "react";

import { Container, Label, StyledInput } from "./styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput {...props} />
    </Container>
  );
};

export default Input;
