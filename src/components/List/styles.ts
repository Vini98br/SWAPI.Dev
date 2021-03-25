import styled from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
  height: calc(100vh - 45px);
  background-color: #f1f1f1;
  padding-bottom: 10px;
`;

export const Content = styled.div`
`;

export const Card = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  margin: 10px 10px;
  border-radius: 5px;
  box-shadow: 0 0 12px -8px rgb(0 0 0 / 60%);
  background-color: #fff;
`;

export const CardTitle = styled.h3``;

export const CardSubTitle = styled.h5`

`;

export const ExtraInfo = styled.div``;
