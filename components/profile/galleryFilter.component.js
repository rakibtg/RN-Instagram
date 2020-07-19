import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../button.component';

const GalleryFilterComponent = () => {
  return <View style={styles.filter}>
    <View><Button iconName="ios-albums" /></View>
    <View><Button iconName="ios-apps" /></View>
  </View>
}

const styles = StyleSheet.create({
  filter: {
    flex: 1, 
    padding: 10, 
    backgroundColor: '#fff'
  }
});

export default GalleryFilterComponent;