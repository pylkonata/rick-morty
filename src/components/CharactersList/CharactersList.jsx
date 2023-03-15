import { useEffect, useState } from 'react';
import './CharactersList.scss';

import CharItem from '../CharItem/CharItem';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { fetchAllChars } from '../../services/fetchData';
import { findChars } from '../../helpers/findChar';

const CharactersList = ({ search }) => {
  const [charsList, setCharsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    onFetch();
  }, []);

  const onFetch = () => {
    fetchAllChars()
      .then((data) => setCharsList(data))
      .then(onCharsListLoaded)
      .catch(onError);
  };

  const onCharsListLoaded = () => {
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const sortedList = charsList
    .slice()
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  const filteredList = findChars(sortedList, search);

  const charListItems = filteredList.map((char) => {
    return <CharItem char={char} key={char.id} />;
  });

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(error || loading) ? charListItems : null;

  return (
    <div className='chars__wrap'>
      {errorMessage}
      {spinner}
      <ul className='chars__list'>{content}</ul>
      <button className='btn'>load more</button>
    </div>
  );
};

export default CharactersList;
