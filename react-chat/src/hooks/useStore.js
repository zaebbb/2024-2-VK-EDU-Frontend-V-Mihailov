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

  const setCurrentChat = (chat) => {
    setState(prevState => ({
      ...prevState,
      currentChat: chat,
    }))
  }

  const cleatCurrentChat = () => {
    setState(prevState => ({
      ...prevState,
      currentChat: null,
    }))
  }

  return {
    setMainPage,
    setChatPage,
    setCurrentChat,
    cleatCurrentChat,

    isMainPage: state.isMainPage,
    isChatPage: state.isChatPage,
    currentChat: state.currentChat,
  };
};
