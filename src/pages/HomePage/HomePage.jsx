import { useState, useEffect } from 'react';
import logo from '../../assets/img/rick_morty.png';
import './HomePage.scss';

import jwt_decode from 'jwt-decode';

import CharactersList from '../../components/CharactersList/CharactersList';
import SearchBar from '../../components/SearchBar/SearchBar';

const HomePage = ({ onCharSelected }) => {
  let startSearch = localStorage.getItem('search')
    ? localStorage.getItem('search')
    : '';

  const [search, setSearch] = useState(startSearch);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  const onSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    localStorage.setItem('search', search);
  }, [search]);

  useEffect(() => {
    if (!isLoggedIn) {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById('logInBtn'),
        {
          theme: 'filled_blue',
          size: 'small',
          text: 'signin_with',
          locale: 'en_US',
        }
      );
    }
  }, [isLoggedIn]);

  const handleCredentialResponse = (response) => {
    const responsePayload = jwt_decode(response.credential);
    setUser(responsePayload);
    setIsLoggedIn(true);
  };
  const onLogOut = () => {
    window.google.accounts.id.revoke(user.sub);
    setIsLoggedIn(false);
  };

  return (
    <div className='home-page'>
      <header className='header'>
        <nav className='header__nav'>
          {isLoggedIn ? (
            <p className='header__text'>
              Welcome,
              <span> {user.name}</span>
            </p>
          ) : (
            <div id='logInBtn'></div>
          )}
          {isLoggedIn && (
            <button className='header__logout-btn' onClick={onLogOut}>
              Log out
            </button>
          )}
        </nav>
        <img src={logo} alt='rick and morty' className='header__logo' />
      </header>
      <SearchBar onSearch={onSearch} startSearch={startSearch} />
      <CharactersList search={search} />
    </div>
  );
};
export default HomePage;
