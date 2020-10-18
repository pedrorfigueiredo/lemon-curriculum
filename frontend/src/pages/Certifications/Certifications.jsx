import React from 'react';
import {
  PageWrapper,
  Title,
  Text,
  Item,
  LemonIcon,
} from '../../components/styles';

function Certifications() {
  return (
    <PageWrapper>
      <Title>
        <LemonIcon />
        Certificações
      </Title>
      <Item>
        <Text>Salesforce Developer I</Text>
        <Text>
          Desenvolvedor lógicas de negócio e interfaces de usuário através das
          capacidades programáticas da Lightning Platform, extendendo o
          Salesforce com o uso de Apex, Visualforce e Lightning Components
        </Text>
      </Item>
    </PageWrapper>
  );
}

export default Certifications;
