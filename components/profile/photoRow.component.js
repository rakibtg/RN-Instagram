import React from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Photo from '../photo.component';
import { navigate } from '../../store/actions/app.action';

const IMAGE_WIDTH = Dimensions.get("window").width / 3;

const PhotoRowComponent = ({ data }) => {
  const { item } = data;
  const dispatch = useDispatch();

  const handlePhotoPress = data => {
    dispatch(navigate('Post', data));
  }

  return <View style={styles.row}>
    {
      item.map((photo, index) => <TouchableOpacity key={index} onPress={() => handlePhotoPress(photo)}>
        <Photo 
          uri={photo.photo.small} 
          width={IMAGE_WIDTH} 
          height={IMAGE_WIDTH}
        />
      </TouchableOpacity>)
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