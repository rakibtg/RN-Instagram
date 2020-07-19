import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../button.component';

const PostActionsComponent = () => {
  const [liked, setLiked] = React.useState(false);

  return <View style={styles.actions}>
    <View style={styles.social}>
      <Button 
        onPress={() => setLiked(!liked)}
        style={styles.btn} iconName="ios-heart" iconColor={liked ? 'red' : 'black'} iconSize={30} />
      <Button style={styles.btn} iconName="ios-chatbubbles" iconColor="black" iconSize={30} />
      <Button style={styles.btn} iconName="ios-paper-plane" iconColor="black" iconSize={30} />
    </View>
    <View>
      <Button style={styles.btn} iconName="md-bookmark" iconColor="black" iconSize={30} />
    </View>
  </View>
}

const styles = StyleSheet.create({
  actions: {
    // borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  social: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  btn: {
    paddingHorizontal: 10
  }
})

export default PostActionsComponent;