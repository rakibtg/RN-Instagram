import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Navigation from '../nagivation';

import Layout from '../components/layout.component';

const StatusScreen = ({ navigation }) => {
  return (
    <Layout navigation={navigation} title="Status by rakibtg">
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
    </Layout>
  );
}

export default StatusScreen;