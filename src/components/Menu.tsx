import React from 'react';
import Header from './Header';
import * as styles from '../styles/Menu.module.scss';

interface MenuProps {
  onBack: () => void;
}

const Menu: React.FC<MenuProps> = ({ onBack }) => (
  <div className={styles.container}>
    <Header title="Menu" onBackClick={onBack} />
    <p>This is the menu content.</p>
  </div>
);

export default Menu;
