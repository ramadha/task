import React, { useState } from 'react';
import CardForm from './components/CardForm';
import Menu from './components/Menu';

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {showMenu ? (
        <Menu onBack={() => setShowMenu(false)} />
      ) : (
        <CardForm onMenuClick={() => setShowMenu(true)} />
      )}
    </div>
  );
};

export default App;
