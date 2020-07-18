import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import Photo from './photo.component';
import Text from './text.component';
import { useSelector } from 'react-redux';

const IMAGE_WIDTH = Dimensions.get("window").width / 3;

const GalleryComponent = () => {
  const { galleryHeight } = useSelector(state => state.app);
  const { posts } = useSelector(state => state.post);
  return <View style={[
    { height: galleryHeight }
  ]}>
    <FlatList 
      bounces={false}
      data={posts}
      renderItem={({item}) => {
        return <View style={{flex: 1}}>
          <Photo uri={item.photo.small} width={IMAGE_WIDTH} height={IMAGE_WIDTH} />
        </View>
      }}
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
}

export default GalleryComponent;