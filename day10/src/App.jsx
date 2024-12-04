import React from 'react'
import CounterApp from './components/CounterApp'
import ImageRotation from './components/ImageRotation';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from './components/MainLayout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
        <Route path='/CounterApp' element={<CounterApp />} />
        <Route path='/ImageRotation' element={<ImageRotation />} />
        
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App