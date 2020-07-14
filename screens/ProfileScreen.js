import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Navigation from '../nagivation';

export default ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <TouchableOpacity
        onPress={() => Navigation('Home', {})}
      >
        <Text>Go back home</Text>
      </TouchableOpacity>
    </View>
  );
}