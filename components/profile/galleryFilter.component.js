import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../button.component';
import Colors from '../../constants/colors';

const GalleryFilterComponent = () => {

  const [active, setActive] = React.useState('FEED');

  const handleFilterChange = label => {
    setActive(label);
  }

  return <View style={styles.filter}>
    <View style={[styles.btn, active === 'FEED' && styles.activeBtn]}>
      <Button 
        iconName="ios-albums" 
        iconSize={26}
        iconColor={active === 'FEED' ? Colors.black : Colors.softBlack}
        onPress={() => handleFilterChange('FEED')}
      />
    </View>
    <View style={[styles.btn, active === 'TAGS' && styles.activeBtn]}>
      <Button 
        iconName="ios-apps"
        iconSize={26}
        iconColor={active === 'TAGS' ? Colors.black : Colors.softBlack}
        onPress={() => handleFilterChange('TAGS')}
      />
    </View>
  </View>
}

const styles = StyleSheet.create({
  filter: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btn: {
    flexGrow: 1,
    borderBottomWidth: 2,
    borderBottomColor: Colors.white,
    padding: 6
  },
  activeBtn: {
    borderBottomColor: Colors.black
  }
});

export default GalleryFilterComponent;