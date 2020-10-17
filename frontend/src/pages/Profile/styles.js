import styled from 'styled-components';
import { PageWrapper } from '../../components/styles';

export const Wrapper = styled(PageWrapper)`
  background: ${(props) => props.theme.color.secondary};
`;
