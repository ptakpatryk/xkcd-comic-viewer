let lastFetchedComic;
import { Alert } from 'react-native';

export const fetchComic = (comicNum, setInStateFn, setIsLoading) => {
  console.log('jade z koksem');
  console.log(comicNum, setInStateFn, setIsLoading);
  if (comicNum === lastFetchedComic) return;
  console.log(`Pobieram komiks: ${comicNum}`);
  setIsLoading(true);
  lastFetchedComic = comicNum;
  fetch(`http://xkcd.com/${comicNum}/info.0.json`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setInStateFn((prevState) => [...prevState, data]);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      Alert.alert(
        'Server Problem',
        "We couldn't fetch comics for you :( Try again or restart application.",
        [
          {
            text: 'Try Again',
            onPress: () => fetchComic(comicNum, setInStateFn, setIsLoading),
          },
        ]
      );
    });
};
