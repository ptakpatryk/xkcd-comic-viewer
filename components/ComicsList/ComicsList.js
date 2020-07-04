import React, { useEffect, useState } from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { fetchComic } from '../../util/util';

import ComicsListItem from './ComicsListItem/ComicsListItem';

const ComicsList = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://xkcd.com/info.0.json', {
      header: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData([data]);
      })
      .catch(() => {
        Alert.alert(
          'Server Problem',
          "We couldn't connect with the server. Try to restart application or come back later.",
          [
            {
              text: 'OK',
            },
          ]
        );
      });
  }, []);

  const fetchMoreHandler = () => {
    fetchComic(data[data.length - 1].num - 1, setData, setIsLoading);
  };

  const goToDetailsHandler = (title, imgSrc) => {
    navigation.navigate('ComicDetails', { title, imgSrc });
  };

  const content =
    data.length === 0 ? (
      <ActivityIndicator color='blue' size='large' />
    ) : (
      <FlatList
        data={data}
        style={{ backgroundColor: '#121212' }}
        renderItem={({ item }) => (
          <ComicsListItem
            comic={item}
            key={item.num}
            goToDetailsHandler={() => goToDetailsHandler(item.title, item.img)}
          />
        )}
        keyExtractor={(item) => item.num.toString()}
        onEndReachedThreshold={1}
        onEndReached={fetchMoreHandler}
      />
    );

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Latests Comics:</Text>
      {content}
      {isLoading ? (
        <ActivityIndicator
          size='large'
          color='#fcba03'
          style={styles.spinner}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#202020',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 16,
    paddingVertical: 17,
  },
  spinner: {
    position: 'absolute',
    top: 12,
    right: 10,
  },
});

export default ComicsList;
