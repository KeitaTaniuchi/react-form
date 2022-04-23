import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/organisms/Header';
import Step1 from 'components/pages/Step1';
import Step2 from 'components/pages/Step2';
import Step3 from 'components/pages/Step3';
import NoMatch from 'components/pages/NoMatch';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/step1' element={<Step1 />} />
        <Route path='/step2' element={<Step2 />} />
        <Route path='/step3' element={<Step3 />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
