let lastFetchedComic;

export const fetchComic = (comicNum, setInStateFn, setIsLoading) => {
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
    });
};
