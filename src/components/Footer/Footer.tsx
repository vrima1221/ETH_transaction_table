import React from 'react';
import './Footer.scss';

export const Footer: React.FC = React.memo(() => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">AppCo</div>

        <div className="footer__rights">All rights reserved by ThemeTags</div>

        <div className="footer__copyright">Copyrights © 2019. </div>
      </div>
    </footer>
  );
});
