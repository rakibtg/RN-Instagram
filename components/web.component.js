import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import Text from './text.component';

const WebLinkComponent = () => {
  return (
    <TouchableOpacity 
      onPress={() => Linking.openURL('https://rakibtg.com')}
    >
      <Text color="blue" lineHeight={20}>rakibtg.com</Text>
    </TouchableOpacity>
  );
}

export default WebLinkComponent;