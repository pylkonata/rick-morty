import { Link } from 'react-router-dom';

import './SingleCharPage.scss';
import imgCircle from '../../assets/img/char_circle.png';

const SingleCharPage = () => {
  return (
    <div className='single-char__page'>
      <Link to='..' className='single-char__back'>
        <p className='single-char__arrow'></p>
        Go back
      </Link>
      <div className='single-char'>
        <img src={imgCircle} alt='char' className='single-char__img' />
        <h2 className='single-char__name'>Rick Sanchez</h2>
        <div className='single-char__info'>
          <h3 className='single-char__info-title'>Informations</h3>
          <ul className='single-char__descr'>
            <li className='single-char__item'>
              <span className='single-char__item_bold'>Gender</span>
              Male
            </li>
            <li className='single-char__item'>
              <span className='single-char__item_bold'>Status</span>
              Alive
            </li>
            <li className='single-char__item'>
              <span className='single-char__item_bold'>Specie</span>
              Human
            </li>
            <li className='single-char__item'>
              <span className='single-char__item_bold'>Origin</span>
              Earth (C-137)
            </li>
            <li className='single-char__item'>
              <span className='single-char__item_bold'>Type</span>
              Unknown
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleCharPage;
