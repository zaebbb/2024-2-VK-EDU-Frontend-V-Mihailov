import React from 'react';
import cls from './Chat.module.scss';
import { useStore } from '../../hooks/useStore';
import { Message } from '../Message/Message';

export const Chat = () => {
  const { currentChat } = useStore();

  const isMessagesLength = React.useMemo(() => {
    if (!currentChat) {
      return false;
    }
    
    return Boolean(currentChat.messages.length);
  }, [currentChat])

  if (!currentChat) {
    return null;
  }

  return (
    <div className={cls['chat-messages']}>
      {isMessagesLength && currentChat.messages.map(message => (
        <Message 
          key={`${message.message}${message.time}`}
          message={message}
        />
      ))}
    </div>
  )
}
