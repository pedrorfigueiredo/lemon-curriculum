import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin-left: 300px;
  min-height: 100vh;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
