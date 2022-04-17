import React from 'react';
import { Routes, Route, Link, useResolvedPath, useMatch } from 'react-router-dom';
import Step1 from 'components/pages/Step1';
import Step2 from 'components/pages/Step2';
import Step3 from 'components/pages/Step3';
import NoMatch from 'components/pages/NOMATCH';

//下記URLのコードです
//https://reffect.co.jp/react/react-router-6

function App() {
  function CustomLink({ children, to, ...props }: any) {
    let resolved = useResolvedPath(to);
    let match = useMatch({
      path: resolved.pathname,
      end: true,
    });
    return (
      <div>
        <Link style={{ color: match ? 'blue' : 'red' }} to={to} {...props}>
          {children}
        </Link>
      </div>
    );
  }
  return (
    <div className='App'>
      <ul>
        <li>
          <CustomLink to='/step1'>Step1</CustomLink>
        </li>
        <li>
          <CustomLink to='/step2'>Step2</CustomLink>
        </li>
        <li>
          <CustomLink to='/step3'>Step3</CustomLink>
        </li>
      </ul>
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
