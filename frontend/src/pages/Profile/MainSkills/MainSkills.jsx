import React from 'react';
import { useSelector } from 'react-redux';
import { v1 as uuid } from 'uuid';
import { Title, LemonIcon } from '../../../components/styles';
import { CardList, Card } from './styles';

function MainSkills() {
  const { skills } = useSelector((state) => state.profile.data);

  return (
    <div>
      <Title>
        <LemonIcon />
        Habilidades
      </Title>
      <CardList>
        {skills && skills.map((skill) => <Card key={uuid()}>{skill}</Card>)}
      </CardList>
    </div>
  );
}

export default MainSkills;
