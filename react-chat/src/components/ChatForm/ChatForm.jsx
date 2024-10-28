import React from 'react';
import cls from './ChatForm.module.scss';

export const ChatForm = () => {
  return (
    <form className={cls['chat-form']} action="/">
      <input 
        className={cls['chat-form__input']} 
        name="message-text" 
        placeholder="Написать сообщение..." 
        type="text"
      />
    </form>
  )
}
