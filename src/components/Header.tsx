import React from 'react';
import { useMenuContext } from '../context/MenuContext';

interface HeaderProps {
  title: string;
  isBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, isBack = false }) => {
  const { toggleMenu, closeMenu } = useMenuContext();

  return (
    <header>
      {isBack ? (
        <button aria-label="Go back" onClick={closeMenu} className="header-button">
          ←
        </button>
      ) : (
        <button aria-label="Open menu" onClick={toggleMenu} className="header-button">
          ☰
        </button>
      )}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
