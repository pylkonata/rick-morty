import logo from '../../assets/img/rick_morty.png';
import './HomePage.scss';
import CharactersList from '../../components/CharactersList/CharactersList';

const HomePage = () => {
  return (
    <div className='home-page'>
      <img src={logo} alt='rick and morty' className='home-page__logo' />
      <div className='search-bar'>
        <span className='search-bar__icon'></span>
        <input
          type='text'
          className='search-bar__input'
          placeholder='Filter by name...'
        />
      </div>
      <CharactersList />
    </div>
  );
};
export default HomePage;
