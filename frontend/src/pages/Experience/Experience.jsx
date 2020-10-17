import React from 'react';
import {
  PageWrapper,
  Title,
  Text,
  Item,
  LemonIcon,
} from '../../components/styles';

function Experience() {
  return (
    <PageWrapper>
      <Title>
        <LemonIcon />
        Experience
      </Title>
      <Item>
        <Text>Engenharia de Software (cursando)</Text>
        <Text>Unicesumar / 2019 - 2021</Text>
      </Item>
      <Item>
        <Text>Mestrado em Tecnologia, Ambiente e Sociedade (cursando)</Text>
        <Text>UFVJM / 2019 - 2021</Text>
      </Item>
      <Item>
        <Text>Engenharia Civil</Text>
        <Text>UFVJM / 2012 - 2017</Text>
      </Item>
      <Item>
        <Text>Bacharelado em Ciência e Tecnologia</Text>
        <Text>UFVJM / 2012 - 2014</Text>
      </Item>
    </PageWrapper>
  );
}

export default Experience;
