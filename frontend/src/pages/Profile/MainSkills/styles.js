import styled from 'styled-components';

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.color.white};
  border: 3px solid ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.fontColor.dark};
  margin: 5px 10px;
  padding: 5px 20px;
  transition: 0.2s;
  cursor: default;
  :hover {
    background: ${(props) => props.theme.color.primary};
    border: 3px solid ${(props) => props.theme.color.primaryDark};
  }
`;
