import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComicsListItem = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>ComicsListItem SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 100,
  },
  text: {
    fontSize: 25,
  },
});

export default ComicsListItem;
