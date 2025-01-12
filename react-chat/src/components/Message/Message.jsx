import React from 'react';
import cls from './Message.module.scss';
import { classNames } from '../../utils/classNames';

export const Message = (props) => {
  const {
    message,
  } = props;

  const mods = {
    [cls['message--participant']]: message.isUser,
  }

  const additional = [
    cls['show'],
  ];

  return (
    <div className={classNames(cls['message'], mods, additional)}>
      <p className={cls['message__content']}>
        {message.message}
      </p>
      <span className={cls['message__time']}>
        {message.time}
      </span>
    </div>
  )
}
