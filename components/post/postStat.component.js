import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Text from '../text.component';

const PostStatComponent = ({ likes }) => {
  return <View style={styles.content}>
    <Text size="md" bold>{likes} likes</Text>
  </View>
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 15,
    paddingVertical: 8
  }
})

export default PostStatComponent;