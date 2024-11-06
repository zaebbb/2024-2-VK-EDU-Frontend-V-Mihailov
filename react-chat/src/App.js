import React from 'react';
import { useStore } from './hooks/useStore';
import cls from './App.module.scss';
import { Header } from './components/Header/Header';
import { saveMockData } from './mock/saveMockData';
import { classNames } from './utils/classNames';
import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { ChatPage } from './pages/ChatPage';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  const { 
    isChatPage,
  } = useStore();

  const mods = {
    [cls['chat-page']]: isChatPage,
  };

  React.useEffect(() => {
    saveMockData();
  }, []);

  return (
    <HashRouter>
      <main className={classNames(cls['chat'], mods, [])}>
        <Header />

        <Routes>
          <Route 
            path="/"
            element={<MainPage />}
          />
          <Route 
            path="/chat/:id"
            element={<ChatPage />}
          />
          <Route 
            path="/profile"
            element={<ProfilePage />}
          />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
