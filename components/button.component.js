import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Text from './text.component';
import Colors from '../constants/colors';

const ButtonComponent = props => {
  const {
    label = null,
    iconName = null,
    iconColor = null,
    iconSize = 32,
    onPress = null,
    color = 'black',
    center = true,
    height = null,
    width = null,
    borderWidth = 0,
    borderRadius = null,
    borderColor = null,
    bold = false,
    background = 'transparent'
  } = props;

  const buttonStyle = [
    {
      borderWidth,
      borderColor,
      width, height,
      borderRadius,
      backgroundColor: Colors[background]
    }
  ];

  center && buttonStyle.push(styles.center);

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {label && <Text color={color} bold={bold}>{label}</Text>}
      {iconName && <Ionicons name={iconName} size={iconSize} color={iconColor} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ButtonComponent;