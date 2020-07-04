import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComicsList = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>ComicsList SCREEN</Text>
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

export default ComicsList;
