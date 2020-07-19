import React from 'react';
import { SectionList } from 'react-native';
import Layout from '../components/layout.component';
import PhotoRow from '../components/profile/photoRow.component';
import Section from '../components/profile/section.component';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setUser } from '../store/actions/app.action';
import { setPosts } from '../store/actions/post.action';
import { translateToProfileSections } from '../helpers';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setUser());
    dispatch(setPosts());
  }, [dispatch]);

  const { posts } = useSelector(state => state.post, shallowEqual);
  const sections = translateToProfileSections(posts);

  return <Layout navigation={navigation} title="rakibtg" renderView>
    <SectionList 
      bounces={false}
      sections={sections}
      removeClippedSubviews={true}
      stickySectionHeadersEnabled={true}
      keyExtractor={(item, index) => index.toString()}
      renderItem={item => <PhotoRow data={item} />}
      renderSectionHeader={({ section }) => <Section data={section} />}
      showsVerticalScrollIndicator={false}
    />
  </Layout>
}

export default ProfileScreen;