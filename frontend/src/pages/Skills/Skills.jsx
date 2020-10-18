import React from 'react';
import { useSelector } from 'react-redux';
import { PageWrapper, Title, Item, LemonIcon } from '../../components/styles';

function Skills() {
  const { abilities } = useSelector((state) => state.profile.data);
  return (
    <PageWrapper>
      <Title>
        <LemonIcon />
        Habilidades
      </Title>
      {abilities && abilities.map((ability) => <Item>{ability}</Item>)}
    </PageWrapper>
  );
}

export default Skills;
