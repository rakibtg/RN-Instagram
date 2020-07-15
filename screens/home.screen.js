import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Navigation from '../nagivation';

export default HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{marginBottom: 20}}>
        <Text>Home Screen</Text>
      </View>
      <TouchableOpacity
        onPress={
          () => Navigation('Profile', {})
        }
      >
        <Text>Go to profile</Text>
      </TouchableOpacity>
    </View>
  );
}