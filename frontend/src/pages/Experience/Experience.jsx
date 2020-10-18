import React from 'react';
import { useSelector } from 'react-redux';
import { v1 as uuid } from 'uuid';
import {
  PageWrapper,
  Title,
  Text,
  Item,
  LemonIcon,
} from '../../components/styles';

function Experience() {
  const { experience } = useSelector((state) => state.profile.data);
  return (
    <PageWrapper>
      <Title>
        <LemonIcon />
        Experiência
      </Title>
      {experience &&
        experience.length > 0 &&
        experience.map((item) => (
          <Item key={uuid()}>
            <Text>{item.date}</Text>
            <Text>{item.company}</Text>
            <Text>
              Cargo:
              {item.role}
            </Text>
            <Text>
              Principais atividades:
              {item.activities}
            </Text>
          </Item>
        ))}
    </PageWrapper>
  );
}

export default Experience;
