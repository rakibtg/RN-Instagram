import React from 'react';
import { Image } from 'react-native';

const PhotoComponent = props => {
  const {
    uri = false,
    radius = 0,
    width = 0,
    height = 0,
    resizeMode = 'cover',
    margin = 0
  } = props;

  const imageStyle = {
    borderRadius: radius,
    width, 
    height,
    resizeMode,
    margin
  };

  return <Image style={imageStyle} source={{ uri }} />;
}

export default PhotoComponent;