import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Photo from '../photo.component';

const IMAGE_SIZE = Dimensions.get("window").width;

const PostBodyComponent = ({ data }) => {
  console.log(data)
  return <View style={styles.viewer}>
    <Photo 
      uri={data.large}
      width={IMAGE_SIZE}
      height={IMAGE_SIZE}
    />
  </View>
}

const styles = StyleSheet.create({
  viewer: {
    marginBottom: 10
  }
})

export default PostBodyComponent;