import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;
`;

export const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  height: 30px;
  outline: none;
  margin-top: 5px;
  padding-left: 5px;
  transition: box-shadow 0.5s;
  :focus{
    box-shadow: 0 0 6px 1px rgba(0,0,0, 0.6)
  }
`;

export const Label = styled.span``;
