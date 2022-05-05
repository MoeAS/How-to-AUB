import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const colors = {
  primary: '#070f18',
  gray: '#ffd700',
  lightGray: '#ffd700',
  light: '#fbfbfb',
  white: '#fff',
  black: '#2C3E4F', 
  yellow: '#ffd700',
};

export const shadow = {
  light: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

export const sizes = {
  width,
  height,
  title: 32,
  h2: 24,
  h3: 18,
  body: 14,
  radius: 16,
};

export const spacing = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};