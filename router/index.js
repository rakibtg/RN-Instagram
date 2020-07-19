import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '../nagivation';
import Button from '../components/button.component';

import PostScreen from '../screens/post.screen';
import ProfileScreen from '../screens/profile.screen';

const Stack = createStackNavigator()

export default function Router () {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            headerRight: () => <View style={{marginHorizontal: 20}}>
              <Button padding={10} iconName="ios-menu" />
            </View>
          }}
        />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}