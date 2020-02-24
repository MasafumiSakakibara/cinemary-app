import React from 'react';
import Search from '../components/Search';
import Menu from '../components/Menu';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>Cinemary</h1>
      </div>
      <Search />
      <Menu />
    </header>
  );
};

export default Header;
