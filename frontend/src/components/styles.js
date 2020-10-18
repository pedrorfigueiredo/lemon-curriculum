import styled, { keyframes } from 'styled-components';
import { FaLemon } from 'react-icons/fa';

export const PageWrapper = styled.div`
  margin-left: 300px;
  min-height: 100vh;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.color.secondary};
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 50px;
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.large};
  color: ${(props) => props.theme.fontColor.dark};
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.fontColor.dark};
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-align: justify;
`;

export const Item = styled.span`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.fontColor.dark};
  padding-bottom: 10px;
  margin-bottom: 10px;
  text-align: justify;
  border-bottom: 1px solid ${(props) => props.theme.color.secondaryDark};
`;

export const LemonIcon = styled(FaLemon)`
  font-size: ${(props) => props.theme.fontSize.medium};
  margin-right: 10px;
  color: ${(props) => props.theme.fontColor.dark};
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 4px solid ${(props) => props.theme.fontColor.white};
  border-top: 4px solid ${(props) => props.theme.fontColor.dark};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: auto;
`;
