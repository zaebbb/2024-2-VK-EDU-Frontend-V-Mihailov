import React from 'react';
import { AppContext } from '../store';

export const useStore = () => {
  const { setState, state } = React.useContext(AppContext);

  const clearPages = () => {
    setState(prevState => ({
      ...prevState,
      isMainPage: false,
      isChatPage: false,
    }));
  };

  const setMainPage = () => {
    clearPages();

    setState(prevState => ({
      ...prevState,
      isMainPage: true,
    }));
  };

  const setChatPage = () => {
    clearPages();

    setState(prevState => ({
      ...prevState,
      isChatPage: true,
    }));
  };

  return {
    setMainPage,
    setChatPage,

    isMainPage: state.isMainPage,
    isChatPage: state.isChatPage,
  };
};
