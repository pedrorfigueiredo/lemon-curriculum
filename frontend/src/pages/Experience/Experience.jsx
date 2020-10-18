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
        Experiência
      </Title>
      <Item>
        <Text>Outubro/2019 - Hoje</Text>
        <Text>Freelancer</Text>
        <Text>Cargo: Desenvolvedor Frontend</Text>
        <Text>
          Principais atividades: Desenvolvimento de aplicações web SPA (Single
          Page Applications) com React (Frontend) e RESTful APIs em Node.js,
          Express, MongoDB (Backend)
        </Text>
      </Item>
      <Item>
        <Text>Novembro/2019 - Abril/2017</Text>
        <Text>Brisa Estruturas Metálicas</Text>
        <Text>Cargo: Estagiário de Engenheiro Estrutural</Text>
        <Text>
          Principais atividades: Cálculo estrutural, dimensionamento de
          elementos construtivos; projetos estruturais de estrutura metálica e
          concreto; projetos arquitetônicos; orçamentação
        </Text>
      </Item>
    </PageWrapper>
  );
}

export default Experience;
