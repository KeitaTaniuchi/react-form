import React from 'react';
import CommonLink from 'components/atoms/Link/index';

const Header = () => {
  return (
    <header className='border-b-2 border-black bg-gray-300 bg-opacity-40 pt-4 pb-8'>
      <div className='mx-auto flex w-10/12 justify-between'>
        <p className='text-4xl'>Sample App</p>
        <div>
          <CommonLink to={'/login'} label={'ログイン'} /> | <CommonLink to={'/new-registration'} label={'新規登録'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
