import React from 'react';
import { Routes, Route, Link, useResolvedPath, useMatch } from 'react-router-dom';
import Home from 'components/pages/HOME';
import About from 'components/pages/ABOUT';
import Contact from 'components/pages/CONTACT';
import Posts from 'components/pages/POSTS';
import Post from 'components/pages/POST';
import PostIndex from 'components/pages/POSTINDEX';
import NoMatch from 'components/pages/NOMATCH';
import Button from 'components/atoms/Buttons';

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
      <h1 className='text-green-600'>Hello React Router v6</h1>
      <Button
        className='text-blue-500 px-2 border border-blue-500 font-semibold rounded hover:bg-blue-100 mx-auto'
        label={'test'}
        onClick={() => {
          console.log('成功');
        }}
      />
      <ul>
        <li>
          <CustomLink to='/'>Home</CustomLink>
        </li>
        <li>
          <CustomLink to='/about'>About</CustomLink>
        </li>
        <li>
          <CustomLink to='/contact'>Contact</CustomLink>
        </li>
        <li>
          <CustomLink to='/posts'>Posts</CustomLink>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact message='Hello Contact' />} />
        <Route path='/posts' element={<Posts />}>
          <Route index element={<PostIndex />} />
          <Route path=':postId' element={<Post />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
