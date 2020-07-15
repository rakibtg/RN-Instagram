import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default PhotoComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Photo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});