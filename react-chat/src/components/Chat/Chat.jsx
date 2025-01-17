import React from 'react';
import cls from './Chat.module.scss';
import { Message } from '../Message/Message';

export const Chat = (props) => {
  const { 
    chat,
   } = props;
  const containerRef = React.useRef();

  const isMessagesLength = React.useMemo(() => {
    if (!chat) {
      return false;
    }
    
    return Boolean(chat.messages.length);
  }, [chat]);

  React.useEffect(() => {
    if (chat && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chat]);

  if (!chat) {
    return null;
  }

  return (
    <div className={cls['chat-messages']} ref={containerRef}>
      {isMessagesLength && chat.messages.map(message => (
        <Message 
          key={`${message.message}${message.time}`}
          message={message}
        />
      ))}
    </div>
  )
}
