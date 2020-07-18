import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from './text.component';
import { randomNumber } from '../helpers';

const PhotoComponent = props => {
  const { label } = props;

  return <TouchableOpacity style={styles.wrapper}>
    <Text size="lg" bold>{randomNumber(0, 999)}</Text>
    <Text>{label}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  }
});

export default PhotoComponent;