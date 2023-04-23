import { createContext, useContext, useState } from 'react';

const NavBarVisibilityContext = createContext();

export const useNavBarVisibility = () => useContext(NavBarVisibilityContext);

export const NavBarVisibilityProvider = ({ children }) => {
  const [hidden, setHidden] = useState(false);

  return (
    <NavBarVisibilityContext.Provider value={{ hidden, setHidden }}>
      {children}
    </NavBarVisibilityContext.Provider>
  );
};
