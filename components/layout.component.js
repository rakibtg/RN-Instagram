import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { setGalleryHeight } from '../store/actions/app.action';
import { useDispatch } from 'react-redux';

const LayoutComponent = props => {
  const {
    title,
    navigation,
    style = [],
    children,
    fill = true,
    scroll = true
  } = props;

  const dispatch = useDispatch();

  let contentStyle = [];
  if (typeof style === 'object' && style.length) contentStyle = style;
  else contentStyle.push(style);

  // Cover the entire viewport of the screen.
  fill && contentStyle.push({ flexGrow: 1 });

  React.useEffect(() => {
    if (navigation) {
      navigation.setOptions({ title });
    }
  }, [navigation]);

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={contentStyle}
      showsVerticalScrollIndicator={false}
      scrollEnabled={scroll}
      keyboardShouldPersistTaps='handled'
      scrollEventThrottle={50}
      bounces={false}
      // onScroll={e => {
      //   console.log(e.nativeEvent.contentOffset.y)
      // }}
      onLayout={e => {
        dispatch(setGalleryHeight(e.nativeEvent.layout.height))
      }}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default LayoutComponent;