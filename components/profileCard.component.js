import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './text.component';
import Photo from './photo.component';
import Button from './button.component';
import WebLink from './web.component';
import ProfileStat from './profileStat.component';
import { useSelector } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ProfileCardComponent = () => {
  const { user } = useSelector(state => state.app);
  
  if (user) {
    return (
      <View 
        style={styles.container}
        // onLayout={e => {
        //   console.log('Card Height:', e.nativeEvent.layout.height)
        // }}
        >
        <View style={styles.row}>
          <View style={styles.avatarContainer}>
            <Photo uri={user.avatar.large} width={100} height={100} radius={50} />
            <View style={styles.avatarAddWrapper}>
              <Button 
                iconName="ios-add-circle"
                iconSize={28}
                iconColor="blue"
              />
            </View>
          </View>
          <View style={styles.statWrapper}>
            <ProfileStat label="Posts" />
            <ProfileStat label="Followers" />
            <ProfileStat label="Following" />
          </View>
        </View>
        <View style={styles.footer}>
          <Text lineHeight={20} size="md" bold>{user.name}</Text>
          <Text lineHeight={22}>I found "Foo Bar" to be always useful for this.</Text>
          <WebLink />
          <View style={styles.editBtnWrapper}>
            <Button 
              label="Edit Profile"
              borderWidth={1}
              borderColor="grey"
              height={26}
              borderRadius={5}
              bold
            />
          </View>
        </View>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // borderWidth: 1,
    padding: 16
  },
  row: {
    flexDirection: 'row'
  },
  avatarContainer: {
    // borderWidth: 1,
    padding: 2,
    width: 106
  },
  avatarAddWrapper: {
    position: 'absolute',
    backgroundColor: Colors.white,
    justifyContent: 'center', 
    alignItems: 'center',
    width: 28,
    height: 28,
    borderRadius: 28/2,
    bottom: 0, 
    right: 0,
    margin: 4
  },
  statWrapper: {
    // borderWidth: 1,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    paddingTop: 10,
  },
  editBtnWrapper: {
    marginTop: 10
  }
});

export default ProfileCardComponent;