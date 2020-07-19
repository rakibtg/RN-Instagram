import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Navigation from '../nagivation';
import { setActivePost, resetActivePost } from '../store/actions/post.action';

import PostHeader from '../components/post/postHeader.component';
import PostBody from '../components/post/postBody.component';
import PostActions from '../components/post/postActions.component';
import PostStat from '../components/post/postStat.component';
import PostContent from '../components/post/postContent.component';

import Layout from '../components/layout.component';

const StatusScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setActivePost(route.params));

    return () => {
      dispatch(resetActivePost());
    }
  }, [navigation]);

  const { activePost } = useSelector(state => state.post, shallowEqual);
  if (!activePost) return null;

  return (
    <Layout navigation={navigation} title={activePost.author.name}>
      <PostHeader data={activePost.author}/>
      <PostBody data={activePost.photo} />
      <PostActions />
      <PostStat comments={activePost.comments} likes={activePost.likes} />
      <PostContent author={activePost.author} content={activePost.content}/>
    </Layout>
  );
}

export default StatusScreen;