import error from '../../assets/img/error.png';

import './ErrorMessage.scss';

const ErrorMessage = () => {
  return <img src={error} className='error' alt='error' />;
};
export default ErrorMessage;
