import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './SingleCharPage.scss';

import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import { fetchChar } from '../../services/fetchData';

const SingleCharPage = (props) => {
  const [char, setChar] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { charId } = useParams();

  useEffect(() => {
    onFetchChar();
  }, [charId]);

  const onFetchChar = async () => {
    await fetchChar(charId).then(onCharLoaded).catch(onError);
  };

  const onCharLoaded = (char) => {
    setChar(char);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(error || loading) ? <View char={char} /> : null;

  return (
    <div className='single-char__page'>
      <Link to='..' className='single-char__back'>
        <p className='single-char__arrow'></p>
        Go back
      </Link>
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({ char }) => {
  const { image, name, gender, status, species, origin, type } = char;
  return (
    <div className='single-char'>
      <img src={image} alt={name} className='single-char__img' />
      <h2 className='single-char__name'>{name}</h2>
      <div className='single-char__info'>
        <h3 className='single-char__info-title'>Informations</h3>
        <ul className='single-char__descr'>
          <li className='single-char__item'>
            <span className='single-char__item_bold'>Gender</span>
            {gender}
          </li>
          <li className='single-char__item'>
            <span className='single-char__item_bold'>Status</span>
            {status}
          </li>
          <li className='single-char__item'>
            <span className='single-char__item_bold'>Specie</span>
            {species}
          </li>
          <li className='single-char__item'>
            <span className='single-char__item_bold'>Origin</span>
            {origin.name}
          </li>
          <li className='single-char__item'>
            <span className='single-char__item_bold'>Type</span>
            {type ? type : 'Uknown'}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SingleCharPage;
