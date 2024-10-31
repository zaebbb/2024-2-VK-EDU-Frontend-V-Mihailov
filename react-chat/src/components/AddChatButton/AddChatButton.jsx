import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import cls from './AddChatButton.module.scss';
import { useStore } from '../../hooks/useStore';
import { newChat } from '../../lib/newChat';

export const AddChatButton = () => {
  const { 
    setChatPage,
    setCurrentChat, 
  } = useStore();

  const createChatHandler = React.useCallback(() => {
    const chat = newChat();

    setCurrentChat(chat)
    setChatPage();
  }, [setChatPage, setCurrentChat]);

  return (
    <div className={cls['add-message']} onClick={createChatHandler}>
      <AddIcon />
    </div>
  )
}
