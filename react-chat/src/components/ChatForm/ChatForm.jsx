import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import cls from './ChatForm.module.scss';
import { saveMessage } from '../../lib/saveMessage';
import { useStore } from '../../hooks/useStore';

export const ChatForm = (props) => {
  const {
    chatId,
  } = props;
  
  const {
    reloadMessages,
  } = useStore();
  const [value, setValue] = React.useState('');

  const onChangeHandler = React.useCallback((e) => {
    setValue(e.target.value);
  }, [])

  const onSubmit = React.useCallback((e) => {
    e.preventDefault();

    if (value) {
      saveMessage(chatId, value);
      reloadMessages(true);
      setValue('');
    }
  }, [chatId, reloadMessages, value]);

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

      <button
        type="submit"
        className={cls['chat-form__button']}
      >
        <SendIcon /> 
      </button>
    </form>
  )
}
