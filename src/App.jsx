import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/ContextProvider';

import { CellPage } from './pages/CellPage';

import { MainPage } from './pages/MainPage';

function App() {






  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<MainPage />} />
          <Route path='/cell' element={<CellPage />} />

        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
