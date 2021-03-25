import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
`;

export const Banner = styled.div`
  width: 50%;
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1521985429101-21bed8b75e47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
  filter: blur(2px);
  transform: scale(1.1);
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
  max-width: 400px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 25px !important;
  color: #2C2E2F;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  border: unset;
  padding: 10px;
  border-radius: 5px;
  cursor:pointer;
  box-shadow: 0 0 10px -1px rgba(0,0,0, 0.4);
  margin-top: 20px;
`;
