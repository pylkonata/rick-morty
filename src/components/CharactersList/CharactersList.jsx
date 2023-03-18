import { useEffect, useState } from 'react';
import './CharactersList.scss';

import CharItem from '../CharItem/CharItem';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { loadChars } from '../../services/fetchData';
import { findChars } from '../../helpers/findChar';

const CharactersList = ({ search }) => {
  let savePage = localStorage.getItem('page')
    ? +localStorage.getItem('page')
    : 2;
  let saveChars = localStorage.getItem('chars')
    ? JSON.parse(localStorage.getItem('chars'))
    : [];

  const [charsList, setCharsList] = useState(saveChars);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ended, setEnded] = useState(false);
  const [page, setPage] = useState(savePage);

  useEffect(() => {
    if (!localStorage.getItem('page')) {
      onCharsListLoaded();
      onFetch();
    }
  }, []);

  const onFetch = () => {
    loadChars()
      .then((data) => setCharsList(data))
      .then(onCharsListLoaded)
      .catch(onError);
  };

  const onCharsListLoaded = () => {
    setLoading((prev) => !prev);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('page', savePage);
    localStorage.setItem('chars', JSON.stringify(saveChars));
  };

  const updatePage = () => {
    savePage = +page + 1;
    setPage((prev) => prev + 1);
  };

  const updateCharList = (data) => {
    setCharsList((prev) => [...prev, ...data]);
    saveChars = charsList.concat(data);
  };

  const onLoadMore = async (id) => {
    onCharsListLoaded();
    await loadChars(id)
      .then(updateCharList)
      .then(onCharsListLoaded)
      .catch(onError);

    updatePage();
    saveToLocalStorage();

    if (page + 1 === 42) {
      setEnded(true);
    }
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
  const styledBtn = ended ? { display: 'none' } : { display: 'block' };

  return (
    <div className='chars__wrap'>
      {errorMessage}
      {spinner}
      <ul className='chars__list'>{content}</ul>
      <button
        style={styledBtn}
        className='btn'
        onClick={() => onLoadMore(page)}
      >
        load more
      </button>
    </div>
  );
};

export default CharactersList;
