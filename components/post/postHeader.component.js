import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Button from '../button.component';
import Photo from '../photo.component';
import Text from '../text.component';

const PostHeaderComponent = ({ data }) => {
  return <View style={styles.header}>
    <View style={styles.info}>
      <Photo uri={data.avatar.small} height={40} width={40} radius={20} />
      <Button style={styles.pad10} label={data.handle} color="black" bold/>
      <Text size="md">&bull;</Text>
      <Button style={styles.pad10} label="Follow" color="blue" bold/>
    </View>
    <View>
      <Button iconName="ios-more" iconSize={24} />
    </View>
  </View>
}

const styles = StyleSheet.create({
  header: {
    // borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  info: {
    flexGrow: 1,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  pad10: {
    padding: 10
  }
})

export default PostHeaderComponent;