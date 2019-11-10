import React from 'react';
import './TopBar.css';

// images

import logo from '../../assets/logo.png';
import profile from '../../assets/user.png';

function TopBar() {
  return (
    <header>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="controls">
        <span>Meu Perfil</span>
        <img src={profile} />
      </div>
    </header>
  );
}

export default TopBar;
