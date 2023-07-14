import React from 'react';
import coverImage from '../../assets/images/cover-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Justin Perry</h1>
      <img src={coverImage} alt="Purple glass shatter design"></img>
      {props.children}
    </header>
  );
}

export default Header;
