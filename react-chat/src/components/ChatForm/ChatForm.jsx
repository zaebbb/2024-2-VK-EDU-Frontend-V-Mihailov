import React from 'react';
import cls from './ChatForm.module.scss';
import { saveMessage } from '../../lib/saveMessage';
import { useStore } from '../../hooks/useStore';

export const ChatForm = () => {
  const {
    currentChat,
    addMessage,
  } = useStore();
  const [value, setValue] = React.useState('');

  const onChangeHandler = React.useCallback((e) => {
    setValue(e.target.value.trim());
  }, [])

  const onSubmit = React.useCallback((e) => {
    e.preventDefault();

    if (value) {
      saveMessage(currentChat.id, value);
      addMessage(value);
      setValue('');
    }
  }, [addMessage, currentChat.id, value]);

  return (
    <form className={cls['chat-form']} action="/" onSubmit={onSubmit}>
      <input 
        className={cls['chat-form__input']} 
        name="message-text" 
        placeholder="Написать сообщение..." 
        type="text"
        value={value}
        onChange={onChangeHandler}
      />
    </form>
  )
}
