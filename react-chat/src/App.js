import React from 'react';
import { useStore } from './hooks/useStore';
import cls from './App.module.scss';
import { Header } from './components/Header/Header';
import { AddChatButton } from './components/AddChatButton/AddChatButton';
import { saveMockData } from './mock/saveMockData';
import { MessagePreviewList } from './components/MessagePreviewList/MessagePreviewList';
import { ChatForm } from './components/ChatForm/ChatForm';
import { Chat } from './components/Chat/Chat';
import { classNames } from './utils/classNames';

function App() {
  const { 
    isChatPage,
    isMainPage, 
  } = useStore();

  const mods = {
    [cls['chat-page']]: isChatPage,
  };

  React.useEffect(() => {
    saveMockData();
  }, []);

  return (
    <main className={classNames(cls['chat'], mods, [])}>
      <Header />

      {isMainPage && (
        <MessagePreviewList />
      )}

      {isMainPage && (
        <AddChatButton />
      )}

      {isChatPage && (
        <Chat />
      )}

      {isChatPage && (
        <ChatForm />
      )}
    </main>
  );
}

export default App;
