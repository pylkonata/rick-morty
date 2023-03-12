import charImg from '../../assets/img/char-example.jpg';

import './CharItem.scss';

const CharItem = () => {
  return (
    <li className='char-item'>
      <img src={charImg} alt='some char' className='char-item__img' />
      <div className='char-item__text-wrap'>
        <h3 className='char-item__name'>Rick Sanchez</h3>
        <p className='char-item__species'>human</p>
      </div>
    </li>
  );
};

export default CharItem;
