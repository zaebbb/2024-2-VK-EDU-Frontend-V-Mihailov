import React from 'react';
import cls from './MessagePreview.module.scss';
import AvatarDefault from '../../assets/images/user.png';
import { classNames } from '../../utils/classNames';
import { useStore } from '../../hooks/useStore';

export const MessagePreview = (props) => {
  const {
    chatInfo,
  } = props;

  const { 
    setChatPage,
    setCurrentChat, 
  } = useStore();

  const lastMessage = chatInfo.messages.at(-1);
  const messageStatusClassName = {
    [cls['chat-user-properties__status--new-message']]: true,
  };

  const viewChatHandler = React.useCallback(() => {
    setCurrentChat(chatInfo);
    setChatPage();
  }, [chatInfo, setChatPage, setCurrentChat]);

  return (
    <div 
      className={cls['chat-user']}
      onClick={viewChatHandler}
    >
      <img 
        src={chatInfo.avatar ?? AvatarDefault} 
        alt={chatInfo.name ?? ''}
        className={cls['chat-user__avatar']}
      />

      <div className={cls['chat-user-info']}>
        <div className={cls['chat-user-message']}>
          <h3 className={cls['user-message__username']}>
            {chatInfo.name ?? ''}
          </h3>

          <p className={cls['chat-user-message__text']}>
            {lastMessage ? lastMessage.message : ''}
          </p>
        </div>

        <div className={cls['chat-user-properties']}>
          <span className={cls['chat-user-properties__time']}>
            {lastMessage ? lastMessage.time : ''}
          </span>

          <span 
            className={classNames(cls['chat-user-properties__status'], messageStatusClassName, [])}
          >
            99
          </span>
        </div>
      </div>
    </div>
  )
}
