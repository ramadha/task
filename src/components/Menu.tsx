import React from 'react';
import Header from './Header';

interface MenuProps {
  onBack: () => void;
}

const Menu: React.FC<MenuProps> = ({ onBack }) => (
  <div>
    <Header title="Menu" onBackClick={onBack} />
    <p>This is the menu content.</p>
  </div>
);

export default Menu;
