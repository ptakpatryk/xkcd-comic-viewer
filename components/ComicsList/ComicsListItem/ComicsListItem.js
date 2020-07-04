import React, { useRef, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ComicListItem = ({ comic, onPressHandler }) => {
  const onLoadAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(onLoadAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ ...styles.comicContainer, opacity: onLoadAnim }}>
      <Text style={styles.comicTitle}>{comic.title}</Text>
      <Image source={{ uri: comic.img }} style={styles.comicImg} />
      <TouchableOpacity style={styles.btn} onPress={onPressHandler}>
        <Icon name='chevron-circle-right' size={32} color='#BB86FC' />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  comicContainer: {
    width: '95%',
    paddingVertical: 20,
    height: 150,
    marginVertical: 15,
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    borderLeftWidth: 2,
    borderColor: '#BB86FC',
    borderRadius: 15,
  },
  comicTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
    maxWidth: '40%',
  },
  comicImg: {
    flex: 2,
    width: null,
    height: '100%',
    resizeMode: 'cover',
    marginHorizontal: 15,
  },
  btn: {
    marginLeft: 5,
    marginRight: 15,
  },
});

export default ComicListItem;
