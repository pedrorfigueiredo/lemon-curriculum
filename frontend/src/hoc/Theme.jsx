import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const lemon = {
  background: {
    primary: '#8bc34a',
    primaryDark: '#5a9216',
    primaryLight: '#bef67a',
    secondary: '#cddc39',
    secondaryDark: '#99aa00',
    secondaryLight: '#ffff6e',
  },
  color: {
    dark: '#212121',
    light: '#757575',
  },
  fontSize: {
    small: '0.8em',
    medium: '1em',
    large: '1.2em',
    huge: '1.4em',
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={lemon}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.element,
};

Theme.defaultProps = {
  children: null,
};

export default Theme;
