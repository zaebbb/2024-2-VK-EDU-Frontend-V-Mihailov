import React from 'react';
import { AppContext } from '../store';

export const useStore = () => {
  const { setState, state } = React.useContext(AppContext);

  const clearPages = () => {
    setState(prevState => ({
      ...prevState,
      isMainPage: false,
      isChatPage: false,
      isProfilePage: false,
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

  const setProfilePage = () => {
    clearPages();

    setState(prevState => ({
      ...prevState,
      isProfilePage: true,
    }));
  };

  const setChatId = (chatId) => {
    setState(prevState => ({
      ...prevState,
      chatId,
    }));
  }

  const clearChatId = () => {
    setState(prevState => ({
      ...prevState,
      chatId: null,
    }));
  }

  const reloadMessages = (value) => {
    setState(prevState => ({
      ...prevState,
      isReloadMessages: value,
    }));
  }

  return {
    setMainPage,
    setChatPage,
    setProfilePage,
    reloadMessages,
    setChatId,
    clearChatId,

    isMainPage: state.isMainPage,
    isChatPage: state.isChatPage,
    isProfilePage: state.isProfilePage,
    chatId: state.chatId,
    isReloadMessages: state.isReloadMessages,
  };
};
