import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

const TextComponent = props => {
  const {
    color = 'black',
    size = 'md',
    bold = false,
    lineHeight = null,
    children
  } = props;
  
  const textStyle = [];

  styles[color] && textStyle.push(styles[color]);
  styles[size] && textStyle.push(styles[size]);
  bold && textStyle.push(styles.bold);
  lineHeight && textStyle.push({ lineHeight });

  return <Text style={textStyle}>{children}</Text>;
}

const styles = StyleSheet.create({
  black: {
    color: Colors.black
  },
  white: {
    color: Colors.white
  },
  blue: {
    color: Colors.blue
  },
  sm: {
    fontSize: 12,
  },
  md: {
    fontSize: 14
  },
  lg: {
    fontSize: 18
  },
  bold: {
    fontWeight: 'bold'
  }
});

export default TextComponent;