import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  z-index: 4;

  height: 100px;
  width: 360px;
  border-radius: 5px;
  background: white;
  text-align: center;

  padding: 22px 15px 15px 15px;

  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const Title = styled.span`
  color: ${(props) => props.theme.fontColor.dark};
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export const Panel = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;

  background: rgba(100, 100, 100, 0.8);
`;
