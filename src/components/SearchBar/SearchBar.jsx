import { useState } from 'react';

import './SearchBar.scss';

const SearchBar = ({ onSearch, startSearch }) => {
  const [search, setSearch] = useState(startSearch);

  const onSearchChars = (e) => {
    const value = e.target.value;
    onSearch(value);
    setSearch(value);
    console.log(search);
  };

  return (
    <div className='search-bar'>
      <span className='search-bar__icon'></span>
      <input
        value={search}
        type='text'
        className='search-bar__input'
        placeholder='Filter by name...'
        onChange={(e) => onSearchChars(e)}
      />
    </div>
  );
};

export default SearchBar;
