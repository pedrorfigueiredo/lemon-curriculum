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

function Certifications() {
  const { certifications } = useSelector((state) => state.profile.data);
  return (
    <PageWrapper>
      <Title>
        <LemonIcon />
        Certificações
      </Title>
      {certifications &&
        certifications.length > 0 &&
        certifications.map((item) => (
          <Item key={uuid()}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </Item>
        ))}
    </PageWrapper>
  );
}

export default Certifications;
