import React from 'react';
import { useSelector } from 'react-redux';
import { Title, Text, LemonIcon } from '../../../components/styles';

function About() {
  const { about } = useSelector((state) => state.profile.data);
  return (
    <div>
      <Title>
        <LemonIcon />
        Sobre
      </Title>
      <Text>{about}</Text>
    </div>
  );
}

export default About;
