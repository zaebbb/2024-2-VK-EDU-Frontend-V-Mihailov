import React from 'react';
import cls from './Chat.module.scss';
import { useStore } from '../../hooks/useStore';
import { Message } from '../Message/Message';

export const Chat = () => {
  const { currentChat } = useStore();
  const containerRef = React.useRef();

  const isMessagesLength = React.useMemo(() => {
    if (!currentChat) {
      return false;
    }
    
    return Boolean(currentChat.messages.length);
  }, [currentChat])

  React.useEffect(() => {
    if (currentChat && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [currentChat]);

  if (!currentChat) {
    return null;
  }

  return (
    <div className={cls['chat-messages']} ref={containerRef}>
      {isMessagesLength && currentChat.messages.map(message => (
        <Message 
          key={`${message.message}${message.time}`}
          message={message}
        />
      ))}
    </div>
  )
}
