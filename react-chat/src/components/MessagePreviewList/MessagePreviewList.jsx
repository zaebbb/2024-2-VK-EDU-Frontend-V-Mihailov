import React from 'react';
import cls from './MessagePreviewList.module.scss';
import { LOCAL_STORAGE_KEY } from '../../utils/constants';
import { MessagePreview } from '../MessagePreview/MessagePreview';

export const MessagePreviewList = () => {
  const [chats, setChats] = React.useState([]);
  
  React.useEffect(() => {
    const chats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (chats) {
      setChats(chats);
    }
  }, []);

  return (
    <div className={cls['chats-list']}>
      {chats.length && chats.map(message => (
        <MessagePreview 
          key={message.id}
          chatInfo={message}
        />
      ))}
    </div>
  )
}
