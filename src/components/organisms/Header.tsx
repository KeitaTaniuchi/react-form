import React from 'react';
import AppTitle from 'components/atoms/AppTitle';
import LoginLink from 'components/atoms/Links/LoginLink';
import NewRegistrationLink from 'components/atoms/Links/NewRegistrationLink';

const Header = () => {
  return (
    <header className='pt-4 pb-8 border-b-2 border-black bg-gray-300 bg-opacity-40'>
      <div className='mx-auto flex justify-between w-10/12'>
        <AppTitle className={'text-4xl'} />
        <div>
          <LoginLink className={'login'} /> | <NewRegistrationLink className={'newRegistration'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
