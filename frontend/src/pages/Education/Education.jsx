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

function Education() {
  const { education } = useSelector((state) => state.profile.data);
  return (
    <PageWrapper>
      <Title>
        <LemonIcon />
        Formação
      </Title>
      {education &&
        education.length > 0 &&
        education.map((item) => (
          <Item key={uuid()}>
            <Text>{item.title}</Text>
            <Text>{`${item.university} / ${item.date}`}</Text>
          </Item>
        ))}
    </PageWrapper>
  );
}

export default Education;
