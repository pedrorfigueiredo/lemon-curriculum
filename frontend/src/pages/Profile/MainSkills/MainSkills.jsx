import React from 'react';
import { Title, LemonIcon } from '../../../components/styles';
import { CardList, Card } from './styles';

function MainSkills() {
  return (
    <div>
      <Title>
        <LemonIcon />
        Habilidades
      </Title>
      <CardList>
        <Card>React.js</Card>
        <Card>Redux</Card>
        <Card>Styled Components</Card>
        <Card>Unit Testing</Card>
        <Card>Node.js</Card>
        <Card>MongoDB</Card>
        <Card>Javascript</Card>
        <Card>Salesforce</Card>
        <Card>Unity C#</Card>
      </CardList>
    </div>
  );
}

export default MainSkills;
