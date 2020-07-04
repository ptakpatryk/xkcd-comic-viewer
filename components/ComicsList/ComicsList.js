import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { fetchComic } from '../../util/util';

import ComicsListItem from './ComicsListItem/ComicsListItem';

const ComicsList = () => {
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
      });
  }, []);

  const content =
    data.length === 0 ? (
      <ActivityIndicator color='blue' size='large' />
    ) : (
      <FlatList
        data={data}
        style={{ backgroundColor: '#fff' }}
        renderItem={({ item }) => (
          <ComicsListItem comic={item} key={item.num} />
        )}
        keyExtractor={(item) => item.num.toString()}
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
    backgroundColor: '#54b352',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
    paddingVertical: 15,
  },
  spinner: {
    position: 'absolute',
    top: 12,
    right: 10,
  },
});

export default ComicsList;
