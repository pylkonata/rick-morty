import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './SingleCharPage.scss';

import Spinner from '../../components/Spinner/Spinner';
import { fetchChar } from '../../services/fetchData';

const SingleCharPage = (props) => {
  const [char, setChar] = useState();
  const [loading, setLoading] = useState(true);
  const { charId } = useParams();

  useEffect(() => {
    onFetchChar();
  }, [charId]);

  const onFetchChar = async () => {
    await fetchChar(charId)
      .then((data) => setChar(data))
      .then(onCharLoaded)
      .catch((error) => console.log(error));
  };

  const onCharLoaded = () => setLoading(false);

  return (
    <div className='single-char__page'>
      <Link to='..' className='single-char__back'>
        <p className='single-char__arrow'></p>
        Go back
      </Link>
      {loading ? <Spinner /> : <View char={char} />}
    </div>
  );
};

const View = ({ char }) => {
  const { image, name, gender, status, species, origin, type } = char;
  return (
    <div className='single-char'>
      <img src={image} alt='char' className='single-char__img' />
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
