import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import cls from './AddChatButton.module.scss';
import { useStore } from '../../hooks/useStore';

export const AddChatButton = () => {
  const { setChatPage } = useStore();

  const createChatHandler = React.useCallback(() => {
    setChatPage();
  }, [setChatPage]);

  return (
    <div className={cls['add-message']} onClick={createChatHandler}>
      <AddIcon />
    </div>
  )
}
