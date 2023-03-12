import './CharactersList.scss';

import CharItem from '../CharItem/CharItem';

const CharactersList = () => {
  return (
    <div className='chars__wrap'>
      <ul className='chars__list'>
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
      </ul>
      <button className='btn'>load more</button>
    </div>
  );
};

export default CharactersList;
