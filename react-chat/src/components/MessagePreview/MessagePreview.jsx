import React from 'react';
import cls from './MessagePreview.module.scss';
import AvatarDefault from '../../assets/images/user.png';
import { classNames } from '../../utils/classNames';
import { Link } from 'react-router-dom';

export const MessagePreview = (props) => {
  const {
    chatInfo,
  } = props;

  const lastMessage = chatInfo.messages.at(-1);
  const messageStatusClassName = {
    [cls['chat-user-properties__status--new-message']]: true,
  };

  return (
    <Link 
      className={cls['chat-user']}
      to={`/chat/${chatInfo.id}`}
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
            {lastMessage.message ?? ''}
          </p>
        </div>

        <div className={cls['chat-user-properties']}>
          <span className={cls['chat-user-properties__time']}>
            {lastMessage.time ?? ''}
          </span>

          <span 
            className={classNames(cls['chat-user-properties__status'], messageStatusClassName, [])}
          >
            99
          </span>
        </div>
      </div>
    </Link>
  )
}
