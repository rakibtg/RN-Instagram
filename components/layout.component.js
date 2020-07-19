import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Colors from '../constants/colors';

const LayoutComponent = props => {
  const {
    title,
    navigation,
    style = [],
    children,
    fill = true,
    scroll = true,
    renderView = false
  } = props;

  let contentStyle = [];
  if (typeof style === 'object' && style.length) contentStyle = style;
  else contentStyle.push(style);

  // Cover the entire viewport of the screen.
  fill && contentStyle.push({ flexGrow: 1 });

  renderView && contentStyle.push(styles.container);

  React.useEffect(() => {
    if (navigation) {
      navigation.setOptions({ title });
    }
  }, [navigation]);

  if (renderView) {
    return <View
      style={contentStyle}>
      {children}
    </View>
  } else {
    return <ScrollView 
      style={styles.container}
      contentContainerStyle={contentStyle}
      showsVerticalScrollIndicator={false}
      scrollEnabled={scroll}
      keyboardShouldPersistTaps='handled'
      scrollEventThrottle={50}
      bounces={false}>
      {children}
    </ScrollView>
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
});

export default LayoutComponent;