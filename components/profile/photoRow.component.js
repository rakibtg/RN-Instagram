import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Photo from '../photo.component';

const IMAGE_WIDTH = Dimensions.get("window").width / 3;

const PhotoRowComponent = ({ data }) => {
  const { item } = data;
  return <View style={styles.row}>
    {
      item.map((photo, index) => <Photo 
        key={index}
        uri={photo.photo.small} 
        width={IMAGE_WIDTH} 
        height={IMAGE_WIDTH}
      />)
    }
  </View>
}

const styles = StyleSheet.create({
  row: {
    flex: 1, 
    flexDirection: 'row'
  }
})

export default PhotoRowComponent;