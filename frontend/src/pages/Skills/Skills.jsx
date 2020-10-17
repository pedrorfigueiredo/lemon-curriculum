import React from 'react';
import { PageWrapper, Title, Item, LemonIcon } from '../../components/styles';

function Skills() {
  return (
    <PageWrapper>
      <Title>
        <LemonIcon />
        Habilidades
      </Title>
      <Item>
        Desenvolvimento de frontend (SPAs: Single Page Applications) com React
      </Item>
      <Item>Desenvolvimento de componentes funcionais com React Hooks</Item>
      <Item>Gerenciamento de estado com Redux</Item>
      <Item>Estilização CSS-in-JS com Styled Components</Item>
      <Item>Testes automatizados com Jest + Enzyme</Item>
      <Item>
        Desenvolvimento backend de RESTful APIs com Node.js, Express, MongoDB
      </Item>
      <Item>Conhecimento em Apex, Salesforce</Item>
      <Item>
        Desenvolvedor entusiasta de jogos com Unity C# (Memorize English no
        Google Play)
      </Item>
      <Item>Inglês avançado</Item>
      <Item>Responsável, pontual, amigável e entusiasta por tecnologia</Item>
      <Item>
        Capacidade de tomar iniciativa e de se relacionar bem em equipe
      </Item>
      <Item>
        Altamente adaptável e de mente aberta a novas tecnologias e métodos
      </Item>
    </PageWrapper>
  );
}

export default Skills;
