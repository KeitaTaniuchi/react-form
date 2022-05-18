import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/organisms/Header/index';
import Step1 from 'components/pages/Step1/index';
import Step2 from 'components/pages/Step2/index';
import Step3 from 'components/pages/Step3/index';
import NoMatch from 'components/pages/NoMatch/index';

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
