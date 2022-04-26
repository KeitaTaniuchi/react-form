import React from 'react';
import CommonLink from 'components/atoms/CommonLink';

const Header = () => {
  return (
    <header className='pt-4 pb-8 border-b-2 border-black bg-gray-300 bg-opacity-40'>
      <div className='mx-auto flex justify-between w-10/12'>
        <p className='text-4xl'>Sample App</p>
        <div>
          <CommonLink to={'/login'} label={'ログイン'} /> | <CommonLink to={'/new-registration'} label={'新規登録'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
