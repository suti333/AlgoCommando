import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SortingPage from './Pages/SortingPage';
import ArraySearchVisualizer from './Pages/ArraySearchPage';
import TreeRenderer from './Pages/TreePage';

function App()
{
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/learn'>
          {/* <Route index element={} /> */}
          <Route path='sorting' element={<SortingPage />} />
          <Route path='arraySearch' element={<ArraySearchVisualizer/>} />
          <Route path='tree' element={<TreeRenderer />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
