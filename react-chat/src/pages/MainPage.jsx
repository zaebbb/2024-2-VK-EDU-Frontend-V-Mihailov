import React from 'react';
import { MessagePreviewList } from '../components/MessagePreviewList/MessagePreviewList';
import { AddChatButton } from '../components/AddChatButton/AddChatButton';
import { useStore } from '../hooks/useStore';

export const MainPage = () => {
  const { 
    isMainPage, 
    setMainPage,
  } = useStore();

  React.useEffect(() => {
    if (!isMainPage) {
      setMainPage();
    }
  }, [isMainPage, setMainPage]);

  return (
    <>
      <MessagePreviewList />
      <AddChatButton />
    </>
  )
}
