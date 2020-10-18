import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content, Title, Panel } from './styles';

function Modal({ children }) {
  return (
    <Wrapper>
      <Panel />
      <Content>
        <Title>{children}</Title>
      </Content>
    </Wrapper>
  );
}

Modal.propTypes = {
  children: PropTypes.string,
};

Modal.defaultProps = {
  children: 'Problema em se comunicar com o servidor. Tente novamente',
};

export default Modal;
