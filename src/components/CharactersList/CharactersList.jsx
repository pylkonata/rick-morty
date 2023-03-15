import { useEffect, useState } from 'react';
import { fetchAllChars } from '../../services/fetchData';
import './CharactersList.scss';

import CharItem from '../CharItem/CharItem';
import Spinner from '../Spinner/Spinner';
import { findChars } from '../../helpers/findChar';

const CharactersList = ({ search }) => {
  const [charsList, setCharsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onFetch();
  }, []);

  const onFetch = () => {
    fetchAllChars()
      .then((data) => setCharsList(data))
      .then(onCharsListLoaded)
      .catch((error) => error.message);
  };

  const onCharsListLoaded = () => {
    setLoading(false);
  };

  const sortedList = charsList
    .slice()
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  const filteredList = findChars(sortedList, search);

  const charListItems = filteredList.map((char) => {
    return <CharItem char={char} key={char.id} />;
  });
  // const spinner = loading ? <Spinner /> : null;
  // const content = !(error || loading) ? charListItems : null;

  return (
    <div className='chars__wrap'>
      {loading ? <Spinner /> : <ul className='chars__list'>{charListItems}</ul>}
      <button className='btn'>load more</button>
    </div>
  );
};

export default CharactersList;
