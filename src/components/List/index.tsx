import React from "react";

import { Container, Content, Card, CardTitle, CardSubTitle, ExtraInfo } from './styles';

const List: React.FC<{ data: any[], customKeys: { subtitle: string } }> = ({ data, customKeys }) => {
  return (
    <Container>
      <Content>
        {data.map((obj) => (
          <Card key={obj.name}>
            <CardTitle>{obj.name}</CardTitle>
            <CardSubTitle>{obj[customKeys.subtitle]}</CardSubTitle>
            <ExtraInfo></ExtraInfo>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default List;
