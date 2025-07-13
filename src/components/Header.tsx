import React from 'react';
interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
  onBackClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onMenuClick, onBackClick }) => {
  return (
    <header>
      {onBackClick ? (
        <button aria-label="Go back" onClick={onBackClick}>
          ←
        </button>
      ) : (
        <button aria-label="Open menu" onClick={onMenuClick}>
          ☰
        </button>
      )}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
