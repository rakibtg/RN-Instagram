import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Text from '../text.component';

const MOCK_TEXT = `Justo ullamcorper pulvinar nullam elementum mattis hendrerit fusce hendrerit libero vivamus lacinia tortor lacinia aenean a facilisis parturient porta sociosqu.`

const PostContentComponent = ({ author, content }) => {
  return <View style={styles.content}>
    <Text lineHeight={20}><Text style={styles.handle} bold>{author.handle}</Text> {content}. {MOCK_TEXT}</Text>
  </View>
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 15
  }
})

export default PostContentComponent;