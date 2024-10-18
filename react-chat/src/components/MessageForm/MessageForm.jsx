import React from 'react'
import cls from './MessageForm.module.scss';

export const MessageForm = () => {
  return (
    <form className={cls['chat-form']} action="/">
      <input 
        className={cls['chat-form__iput']}
        name="message-text" 
        placeholder="Написать сообщение..." 
        type="text"
      />
    </form>
  )
}
