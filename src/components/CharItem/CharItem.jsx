import './CharItem.scss';
import { useNavigate } from 'react-router-dom';

const CharItem = ({ char }) => {
  const { id, name, image, species } = char;
  const navigate = useNavigate();
  const onCharClicked = () => {
    navigate(`${id}`);
  };

  return (
    <li className='char-item' onClick={onCharClicked}>
      <img src={image} alt={name} className='char-item__img' />
      <div className='char-item__text-wrap'>
        <h3 className='char-item__name'>{name}</h3>
        <p className='char-item__species'>{species}</p>
      </div>
    </li>
  );
};

export default CharItem;
