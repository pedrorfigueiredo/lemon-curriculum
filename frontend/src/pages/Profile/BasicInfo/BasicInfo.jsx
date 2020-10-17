import React from 'react';
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
  return (
    <Wrapper>
      <ImageContainer>
        <Image src="https://avatars1.githubusercontent.com/u/60073971?v=4" />
      </ImageContainer>
      <Info>
        <Name>Pedro Ramalho Figueirêdo</Name>
        <Title>Desenvolvedor Frontend</Title>
        <a
          href="https://www.linkedin.com/in/pedro-figueiredo-024ba2114"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text>
            <LinkedinIcon />
            /in/pedro-figueiredo-024ba2114
          </Text>
        </a>
        <a
          href="https://www.github.com/pedrorfigueiredo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text>
            <GithubIcon />
            /pedrorfigueiredo
          </Text>
        </a>
      </Info>
    </Wrapper>
  );
}

export default BasicInfo;
