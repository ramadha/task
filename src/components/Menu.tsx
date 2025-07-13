import React from 'react';
import Header from './Header';
import * as styles from '../styles/Menu.module.scss';

const Menu: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header title="Menu" isBack />
      <main>
        <p>This is the menu content.</p>
      </main>
    </div>
  );
};

export default Menu;
