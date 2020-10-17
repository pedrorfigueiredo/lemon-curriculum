import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 200px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 50%;
    align-self: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 3px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Name = styled.h1`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.gigantic};
`;

export const GithubIcon = styled(FaGithub)`
  font-size: ${(props) => props.theme.fontSize.large};
  margin-right: 5px;
  color: ${(props) => props.theme.fontColor.dark};
`;

export const LinkedinIcon = styled(FaLinkedin)`
  font-size: ${(props) => props.theme.fontSize.large};
  margin-right: 5px;
  color: ${(props) => props.theme.fontColor.dark};
`;
