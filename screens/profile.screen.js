import React from 'react';
import { StyleSheet, Text, View, SectionList, Dimensions } from 'react-native';
import Layout from '../components/layout.component';
// import Gallery from '../components/gallery.component';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setUser } from '../store/actions/app.action';
import { setPosts } from '../store/actions/post.action';
import ProfileCard from '../components/profileCard.component';

import Photo from '../components/photo.component';
const IMAGE_WIDTH = Dimensions.get("window").width / 3;
import { profileDataChunk } from '../helpers';

const translateToProfileSections = (posts = []) => {
  const sectionData = [
    { title: 'PROFILE_CARD', data: [] },
    { title: 'PHOTO_NAVIGATION', data: profileDataChunk(posts, 3) }
  ];
  return sectionData
}

const Item = ({data}) => {
  const { item } = data;
  return <View style={{flex: 1, flexDirection: 'row'}}>
    {
      item.map((photo, index) => <Photo 
        key={index}
        uri={photo.photo.small} 
        width={IMAGE_WIDTH} 
        height={IMAGE_WIDTH}
      />)
    }
  </View>
};

const Section = ({data}) => {
  if (data.title === 'PHOTOS') return null;
  else if (data.title === 'PROFILE_CARD') return <ProfileCard />
  else if (data.title === 'PHOTO_NAVIGATION') return <View style={{flex: 1, padding: 10, backgroundColor: '#fff'}}>
    <Text>Ok.</Text>
  </View>
}

const Gallery = () => {
  const { posts } = useSelector(state => state.post, shallowEqual);
  const sections = translateToProfileSections(posts)
  return <SectionList 
    bounces={false}
    sections={sections}
    removeClippedSubviews={true}
    stickySectionHeadersEnabled={true}
    keyExtractor={(item, index) => index.toString()}
    renderItem={item => <Item data={item} />}
    renderSectionHeader={({ section }) => <Section data={section} />}
    showsVerticalScrollIndicator={false}
  />
}

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setUser());
    dispatch(setPosts());
  }, [dispatch]);

  return <Gallery />

  /*return (
    <Layout navigation={navigation} title="rakibtg">
      <ProfileCard />
      <Gallery />
    </Layout>
  );*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default ProfileScreen;