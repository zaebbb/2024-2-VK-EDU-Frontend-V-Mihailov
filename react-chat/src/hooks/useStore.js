import React from 'react';
import { AppContext } from '../store';
import { getCurrentTime } from '../utils/getCurrentTime';

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

  const clearCurrentChat = () => {
    setState(prevState => ({
      ...prevState,
      currentChat: null,
    }))
  }

  const addMessage = (message) => {
    const messageInfo = {
      time: getCurrentTime(),
      isUser: false,
      message: message,
    };
    
    setState(prevState => ({
      ...prevState,
      currentChat: {
        ...prevState.currentChat,
        messages: [
          ...prevState.currentChat.messages,
          messageInfo,
        ],
      }
    }))
  }

  return {
    setMainPage,
    setChatPage,
    setCurrentChat,
    clearCurrentChat,
    addMessage,

    isMainPage: state.isMainPage,
    isChatPage: state.isChatPage,
    currentChat: state.currentChat,
  };
};
