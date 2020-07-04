import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ComicDetails = ({
  route: {
    params: { title, imgSrc },
  },
}) => {
  console.log(imgSrc);
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
      <Icon
        name='gesture-spread'
        size={52}
        color='#54b352'
        style={styles.icon}
      />
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height - 145}
        imageWidth={Dimensions.get('window').width - 50}
        style={{ alignSelf: 'stretch' }}
        imageHeight={Dimensions.get('window').height - 200}
      >
        <Image
          source={{ uri: imgSrc }}
          style={styles.image}
          resizeMethod='resize'
        />
      </ImageZoom>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingVertical: 15,
    backgroundColor: '#fcba03',
    elevation: 15,
  },
  imageWrapper: {
    marginTop: 130,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').height - 200,
    resizeMode: 'contain',
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 99,
    opacity: 0.65,
  },
  border: {
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default ComicDetails;
