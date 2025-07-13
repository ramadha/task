import React, { createContext, useContext } from 'react';

interface User {
  firstName: string;
}

const UserContext = createContext<User | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = { firstName: 'Ramadha' }; // Replace with API or dynamic user data later

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUserContext = (): User => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
