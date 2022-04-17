import React, { useState } from 'react';
import { Routes, Route, Link, useResolvedPath, useMatch } from 'react-router-dom';
import Header from 'components/organisms/Header';
import Step1 from 'components/pages/Step1';
import Step2 from 'components/pages/Step2';
import Step3 from 'components/pages/Step3';
import NoMatch from 'components/pages/NOMATCH';

//下記URLのコードです
//https://reffect.co.jp/react/react-router-6

function App() {
  const [step1Q1Answer, setStep1Q1Answer] = useState<string>();
  const [step1Q2YearAnswer, setStep1Q2YearAnswer] = useState<number>();
  const [step1Q2MonthAnswer, setStep1Q2MonthAnswer] = useState<number>();
  const [step1Q2DayAnswer, setStep1Q2DayAnswer] = useState<number>();
  const [step2Q1Answer, setStep2Q1Answer] = useState<string>();
  const [step2Q2Answer, setStep2Q2Answer] = useState<string>();
  const [step2Q3Answer, setStep2Q3Answer] = useState<string>();
  const [step3Q1Answer, setStep3Q1Answer] = useState<string>();

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
      <Header />
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
