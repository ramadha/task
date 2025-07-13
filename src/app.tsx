import React from 'react';
import { MenuProvider, useMenuContext } from './context/MenuContext';
import CardForm from './components/CardForm';
import Menu from './components/Menu';

const AppContent: React.FC = () => {
  const { isMenuOpen } = useMenuContext();
  return isMenuOpen ? <Menu /> : <CardForm />;
};

const App: React.FC = () => (
  <MenuProvider>
    <AppContent />
  </MenuProvider>
);

export default App;
