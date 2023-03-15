import './App.scss';

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import SingleCharPage from './pages/SingleCharPage/SingleCharPage';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path=':charId' element={<SingleCharPage />} />
          <Route path='*' element={<div>Error</div>} />
        </Route>
        <Route path='*' element={<div>Error</div>} />
      </Routes>
    </div>
  );
}

export default App;
