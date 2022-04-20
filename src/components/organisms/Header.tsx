import React from 'react';
import LoginLink from 'components/atoms/Links/LoginLink';
import NewRegistrationLink from 'components/atoms/Links/NewRegistrationLink';

const Header = () => {
  return (
    <header className='pt-4 pb-8 border-b-2 border-black bg-gray-300 bg-opacity-40'>
      <div className='mx-auto flex justify-between w-10/12'>
        <p className='text-4xl'>Sample App</p>
        <div>
          <LoginLink /> | <NewRegistrationLink />
        </div>
      </div>
    </header>
  );
};

export default Header;
