import { useState, useEffect } from 'react';
import logo from '../../assets/img/rick_morty.png';
import './HomePage.scss';

import CharactersList from '../../components/CharactersList/CharactersList';
import SearchBar from '../../components/SearchBar/SearchBar';

const HomePage = ({ onCharSelected }) => {
  let startSearch = localStorage.getItem('search')
    ? localStorage.getItem('search')
    : '';

  const [search, setSearch] = useState(startSearch);

  const onSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    localStorage.setItem('search', search);
  }, [search]);

  return (
    <div className='home-page'>
      <img src={logo} alt='rick and morty' className='home-page__logo' />
      <SearchBar onSearch={onSearch} startSearch={startSearch} />
      <CharactersList search={search} />
    </div>
  );
};
export default HomePage;
