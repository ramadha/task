import React from 'react';
import { MenuProvider, useMenuContext } from './context/MenuContext';
import { UserProvider } from './context/UserContext';
import CardForm from './components/CardForm';
import Menu from './components/Menu';

const AppContent: React.FC = () => {
  const { isMenuOpen } = useMenuContext();
  return isMenuOpen ? <Menu /> : <CardForm />;
};

const App: React.FC = () => (
  <UserProvider>
    <MenuProvider>
      <AppContent />
    </MenuProvider>
  </UserProvider>
);

export default App;
