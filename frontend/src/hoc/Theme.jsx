import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const lemon = {
  color: {
    primary: '#8bc34a',
    primaryDark: '#5a9216',
    primaryLight: '#bef67a',
    secondary: '#cddc39',
    secondaryDark: '#99aa00',
    secondaryLight: '#ffff6e',
    white: '#DCEDC8',
  },
  fontColor: {
    dark: '#212121',
    light: '#757575',
    white: '#DCEDC8',
  },
  fontSize: {
    small: '0.8em',
    medium: '1em',
    large: '1.4em',
    huge: '1.6em',
    gigantic: '1.8em',
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
