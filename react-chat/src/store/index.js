import React from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const defaultState = {
    isMainPage: true,
    isChatPage: false,
    isProfilePage: false,
    chatId: null,
    isReloadMessages: false,
  };

  const [state, setState] = React.useState(defaultState);

  const value = {
    state, 
    setState,
  };

  return (
    <AppContext.Provider value={value} >
      {children}
    </AppContext.Provider>
  );
};

export {
  AppContext,
  AppProvider,
};
