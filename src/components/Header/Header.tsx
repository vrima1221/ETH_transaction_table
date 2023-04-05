import React from 'react';
import './Header.scss';

export const Header: React.FC = React.memo(() => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">AppCo</div>
      </div>
    </header>
  );
});
