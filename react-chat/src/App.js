import React from 'react';
import { useStore } from './hooks/useStore';
import cls from './App.module.scss';
import { Header } from './components/Header/Header';
import { AddChatButton } from './components/AddChatButton/AddChatButton';

function App() {
  const { 
    isChatPage,
    isMainPage, 
  } = useStore();

  React.useEffect(() => {
    if (isChatPage) {
      document.body.classList.add('chat-page');
    } else {
      document.body.classList.remove('chat-page');
    }
  }, [isChatPage])

  return (
    <main className={cls['chat']}>
      <Header />

      {isMainPage && (
        <AddChatButton />
      )}
    </main>
  );
}

export default App;
