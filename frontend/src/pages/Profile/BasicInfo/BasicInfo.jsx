import React from 'react';
import { useSelector } from 'react-redux';
import {
  Wrapper,
  ImageContainer,
  Image,
  Info,
  Name,
  GithubIcon,
  LinkedinIcon,
} from './styles';
import { Title, Text } from '../../../components/styles';

function BasicInfo() {
  const { name, imageUrl, job, linkedin, github } = useSelector(
    (state) => state.profile.data
  );
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={imageUrl} />
      </ImageContainer>
      <Info>
        <Name>{name}</Name>
        <Title>{job}</Title>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <Text>
            <LinkedinIcon />
            Linkedin
          </Text>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Text>
            <GithubIcon />
            Github
          </Text>
        </a>
      </Info>
    </Wrapper>
  );
}

export default BasicInfo;
